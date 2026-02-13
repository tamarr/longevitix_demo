"use server";

import { redirect } from "next/navigation";
import { withAuth } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk, buildRiskInput } from "@/lib/risk";
import { validateLabs } from "./validation";

export const submitLabs = withAuth(async (userId, formData) => {
  const raw = {
    sbp: formData.get("sbp") as string,
    ldl: formData.get("ldl") as string,
    hdl: formData.get("hdl") as string,
    glucose: formData.get("glucose") as string,
    triglycerides: formData.get("triglycerides") as string,
  };

  const result = validateLabs(raw);
  if (!result.success) {
    return result.error.issues[0].message;
  }

  const { sbp, ldl, hdl, glucose, triglycerides } = result.data;

  const baseline = await healthPrisma.baseline.findFirst({
    where: { userId },
  });

  if (!baseline) return "No baseline data found. Please complete onboarding first.";

  // Cross-reference: fetch latest lifestyle data
  const latestLifestyle = await healthPrisma.lifestyle.findFirst({
    where: { userId },
    orderBy: { recordedAt: "desc" },
  });
  const lifestyleData = latestLifestyle?.data as Record<string, number> | null;

  const newLabsData: Record<string, number> = {};
  if (sbp !== undefined) newLabsData.sbp = sbp;
  if (ldl !== undefined) newLabsData.ldl = ldl;
  if (hdl !== undefined) newLabsData.hdl = hdl;
  if (glucose !== undefined) newLabsData.glucose = glucose;
  if (triglycerides !== undefined) newLabsData.triglycerides = triglycerides;

  const risk = computeRisk(buildRiskInput(baseline, newLabsData, lifestyleData));

  const labs = await healthPrisma.medical.create({
    data: {
      userId,
      data: newLabsData,
    },
  });

  await healthPrisma.assessment.create({
    data: {
      userId,
      medicalId: labs.id,
      miScore: risk.mi,
      strokeScore: risk.stroke,
      hfScore: risk.hf,
    },
  });

  redirect("/dashboard");
});
