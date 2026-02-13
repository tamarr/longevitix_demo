import { healthPrisma } from "./prisma";
import { computeRisk, buildRiskInput } from "./risk";

/**
 * Fetches context (baseline + latest cross-reference data), computes risk,
 * and creates the intake record + assessment in a single transaction.
 *
 * The assessment stores IDs for both the new record AND the cross-reference
 * record, so it fully captures which data was used for computation.
 */
export async function createAssessment(
  userId: string,
  newLabsData: Record<string, number> | null,
  newLifestyleData: Record<string, number> | null,
): Promise<string | null> {
  const baseline = await healthPrisma.baseline.findUnique({ where: { userId } });
  if (!baseline) return "No baseline data found. Please complete onboarding first.";

  // Fetch latest cross-reference data only for sources we don't have new data for
  const [existingLabs, existingLifestyle] = await Promise.all([
    newLabsData
      ? Promise.resolve(null)
      : healthPrisma.medical.findFirst({ where: { userId }, orderBy: { recordedAt: "desc" } }),
    newLifestyleData
      ? Promise.resolve(null)
      : healthPrisma.lifestyle.findFirst({ where: { userId }, orderBy: { recordedAt: "desc" } }),
  ]);

  const labsData = newLabsData ?? (existingLabs?.data as Record<string, number> | null);
  const lifestyleData = newLifestyleData ?? (existingLifestyle?.data as Record<string, number> | null);
  const risk = computeRisk(buildRiskInput(baseline, labsData, lifestyleData));

  await healthPrisma.$transaction(async (tx) => {
    const medicalId = newLabsData
      ? (await tx.medical.create({ data: { userId, data: newLabsData } })).id
      : existingLabs?.id ?? undefined;
    const lifestyleId = newLifestyleData
      ? (await tx.lifestyle.create({ data: { userId, data: newLifestyleData } })).id
      : existingLifestyle?.id ?? undefined;

    await tx.assessment.create({
      data: {
        userId,
        medicalId,
        lifestyleId,
        miScore: risk.mi,
        strokeScore: risk.stroke,
        hfScore: risk.hf,
      },
    });
  });

  return null;
}
