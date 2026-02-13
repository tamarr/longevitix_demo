"use server";

import { redirect } from "next/navigation";
import { withAuth } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk, buildRiskInput } from "@/lib/risk";
import { validateLifestyle } from "./validation";

export const submitLifestyle = withAuth(async (userId, formData) => {
  const raw = {
    restingHr: formData.get("restingHr") as string,
    vo2max: formData.get("vo2max") as string,
    activeMinutes: formData.get("activeMinutes") as string,
    sleepHours: formData.get("sleepHours") as string,
    spo2: formData.get("spo2") as string,
  };

  const result = validateLifestyle(raw);
  if (!result.success) {
    return result.error.issues[0].message;
  }

  const { restingHr, vo2max, activeMinutes, sleepHours, spo2 } = result.data;

  const baseline = await healthPrisma.baseline.findFirst({
    where: { userId },
  });

  if (!baseline) return "No baseline data found. Please complete onboarding first.";

  // Cross-reference: fetch latest lab results
  const latestLabs = await healthPrisma.medical.findFirst({
    where: { userId },
    orderBy: { recordedAt: "desc" },
  });
  const labsData = latestLabs?.data as Record<string, number> | null;

  const newLifestyleData: Record<string, number> = {};
  if (restingHr !== undefined) newLifestyleData.restingHr = restingHr;
  if (vo2max !== undefined) newLifestyleData.vo2max = vo2max;
  if (activeMinutes !== undefined) newLifestyleData.activeMinutes = activeMinutes;
  if (sleepHours !== undefined) newLifestyleData.sleepHours = sleepHours;
  if (spo2 !== undefined) newLifestyleData.spo2 = spo2;

  const risk = computeRisk(buildRiskInput(baseline, labsData, newLifestyleData));

  const lifestyle = await healthPrisma.lifestyle.create({
    data: {
      userId,
      data: newLifestyleData,
    },
  });

  await healthPrisma.assessment.create({
    data: {
      userId,
      lifestyleId: lifestyle.id,
      miScore: risk.mi,
      strokeScore: risk.stroke,
      hfScore: risk.hf,
    },
  });

  redirect("/dashboard");
});
