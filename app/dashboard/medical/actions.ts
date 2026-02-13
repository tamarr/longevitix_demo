"use server";

import { redirect } from "next/navigation";
import { withAuth } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk, buildRiskInput } from "@/lib/risk";
import { validateMedical } from "./validation";

export const submitMedical = withAuth(async (userId, formData) => {
  const raw = {
    sbp: formData.get("sbp") as string,
    ldl: formData.get("ldl") as string,
    hdl: formData.get("hdl") as string,
    glucose: formData.get("glucose") as string,
    triglycerides: formData.get("triglycerides") as string,
  };

  const result = validateMedical(raw);
  if (!result.success) {
    return result.error.issues[0].message;
  }

  const { sbp, ldl, hdl, glucose, triglycerides } = result.data;

  // Fetch user's baseline for age/bmi/smoker/diabetes
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

  const newMedicalData: Record<string, number> = {};
  if (sbp !== undefined) newMedicalData.sbp = sbp;
  if (ldl !== undefined) newMedicalData.ldl = ldl;
  if (hdl !== undefined) newMedicalData.hdl = hdl;
  if (glucose !== undefined) newMedicalData.glucose = glucose;
  if (triglycerides !== undefined) newMedicalData.triglycerides = triglycerides;

  const risk = computeRisk(buildRiskInput(baseline, newMedicalData, lifestyleData));

  const medical = await healthPrisma.medical.create({
    data: {
      userId,
      data: newMedicalData,
    },
  });

  await healthPrisma.assessment.create({
    data: {
      userId,
      medicalId: medical.id,
      miScore: risk.mi,
      strokeScore: risk.stroke,
      hfScore: risk.hf,
    },
  });

  redirect("/dashboard");
});
