"use server";

import { redirect } from "next/navigation";
import { withAuth } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk } from "@/lib/risk";
import { calculateAge, calculateBmi } from "@/lib/health";
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

  const age = calculateAge(baseline.birthdate);
  const bmi = calculateBmi(baseline.weight, baseline.height);

  const risk = computeRisk({
    age,
    bmi,
    smoker: baseline.smoker,
    diabetes: baseline.diabetes,
    sbp,
    ldl,
    hdl,
    glucose,
    triglycerides,
  });

  // Store medical record with only provided fields
  const medicalData: Record<string, number> = {};
  if (sbp !== undefined) medicalData.sbp = sbp;
  if (ldl !== undefined) medicalData.ldl = ldl;
  if (hdl !== undefined) medicalData.hdl = hdl;
  if (glucose !== undefined) medicalData.glucose = glucose;
  if (triglycerides !== undefined) medicalData.triglycerides = triglycerides;

  const medical = await healthPrisma.medical.create({
    data: {
      userId,
      data: medicalData,
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
