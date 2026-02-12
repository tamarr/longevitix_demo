"use server";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk } from "@/lib/risk";
import { validateBaseline } from "./validation";

export async function submitBaseline(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const session = await getServerSession(authOptions);
  if (!session?.user) return "Not authenticated";

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
  const now = new Date();
  const age = now.getFullYear() - birth.getFullYear();
  const bmi = weight / ((height / 100) ** 2);
  const risk = computeRisk({ age, bmi, smoker, diabetes });

  await healthPrisma.baseline.create({
    data: {
      userId: session.user.id,
      birthdate: birth,
      height,
      weight,
      smoker,
      diabetes,
    },
  });

  await healthPrisma.assessment.create({
    data: {
      userId: session.user.id,
      miScore: risk.mi,
      strokeScore: risk.stroke,
      hfScore: risk.hf,
    },
  });

  redirect("/dashboard");
}
