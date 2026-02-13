"use server";

import { redirect } from "next/navigation";
import { withAuth } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk } from "@/lib/risk";
import { calculateAge, calculateBmi } from "@/lib/health";
import { validateLifestyle } from "./validation";

export const submitLifestyle = withAuth(async (userId, formData) => {
  const raw = {
    restingHr: formData.get("restingHr") as string,
    vo2max: formData.get("vo2max") as string,
    activeMinutes: formData.get("activeMinutes") as string,
  };

  const result = validateLifestyle(raw);
  if (!result.success) {
    return result.error.issues[0].message;
  }

  const { restingHr, vo2max, activeMinutes } = result.data;

  // Fetch user's baseline for age/bmi/smoker/diabetes
  const baseline = await healthPrisma.baseline.findFirst({
    where: { userId },
  });

  if (!baseline) return "No baseline data found. Please complete onboarding first.";

  const age = calculateAge(baseline.birthdate);
  const bmi = calculateBmi(baseline.weight, baseline.height);

  // Cross-reference: fetch latest medical data
  const latestMedical = await healthPrisma.medical.findFirst({
    where: { userId },
    orderBy: { recordedAt: "desc" },
  });
  const medicalData = latestMedical?.data as Record<string, number> | null;

  const risk = computeRisk({
    age,
    bmi,
    smoker: baseline.smoker,
    diabetes: baseline.diabetes,
    ...(medicalData?.sbp !== undefined && { sbp: medicalData.sbp }),
    ...(medicalData?.ldl !== undefined && { ldl: medicalData.ldl }),
    ...(medicalData?.hdl !== undefined && { hdl: medicalData.hdl }),
    ...(medicalData?.glucose !== undefined && { glucose: medicalData.glucose }),
    ...(medicalData?.triglycerides !== undefined && { triglycerides: medicalData.triglycerides }),
    restingHr,
    vo2max,
    activeMinutes,
  });

  // Store lifestyle record with only provided fields
  const lifestyleData: Record<string, number> = {};
  if (restingHr !== undefined) lifestyleData.restingHr = restingHr;
  if (vo2max !== undefined) lifestyleData.vo2max = vo2max;
  if (activeMinutes !== undefined) lifestyleData.activeMinutes = activeMinutes;

  const lifestyle = await healthPrisma.lifestyle.create({
    data: {
      userId,
      data: lifestyleData,
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
