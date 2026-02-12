"use server";

import { redirect } from "next/navigation";
import { withAuth } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk } from "@/lib/risk";
import { calculateAge, calculateBmi } from "@/lib/health";
import { validateBaseline } from "./validation";

export const submitBaseline = withAuth(async (userId, formData) => {
  const raw = {
    birthdate: formData.get("birthdate") as string,
    height: formData.get("height") as string,
    weight: formData.get("weight") as string,
    smoker: formData.get("smoker"),
    diabetes: formData.get("diabetes"),
  };

  const result = validateBaseline(raw);
  if (!result.success) {
    return result.error.issues[0].message;
  }

  const { birthdate, height, weight, smoker, diabetes } = result.data;

  const birth = new Date(birthdate);
  const age = calculateAge(birth);
  const bmi = calculateBmi(weight, height);
  const risk = computeRisk({ age, bmi, smoker, diabetes });

  await healthPrisma.baseline.create({
    data: {
      userId,
      birthdate: birth,
      height,
      weight,
      smoker,
      diabetes,
    },
  });

  await healthPrisma.assessment.create({
    data: {
      userId,
      miScore: risk.mi,
      strokeScore: risk.stroke,
      hfScore: risk.hf,
    },
  });

  redirect("/dashboard");
});
