"use server";

import { redirect } from "next/navigation";
import { withAuth, validationError } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk, buildRiskInput } from "@/lib/risk";
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
  if (!result.success) return validationError(result.error.issues);

  const { birthdate, height, weight, smoker, diabetes } = result.data;
  const birth = new Date(birthdate);
  const risk = computeRisk(buildRiskInput({ birthdate: birth, height, weight, smoker, diabetes }));

  await healthPrisma.$transaction(async (tx) => {
    await tx.baseline.create({
      data: { userId, birthdate: birth, height, weight, smoker, diabetes },
    });
    await tx.assessment.create({
      data: { userId, miScore: risk.mi, strokeScore: risk.stroke, hfScore: risk.hf },
    });
  });

  redirect("/dashboard");
});
