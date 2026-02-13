"use server";

import { redirect } from "next/navigation";
import { withAuth, validationError } from "@/lib/auth";
import { createAssessment } from "@/lib/assessment";
import { validateLifestyle } from "./validation";

export const submitLifestyle = withAuth(async (userId, formData) => {
  const raw = {
    restingHr: formData.get("restingHr") as string,
    vo2max: formData.get("vo2max") as string,
    activeMinutes: formData.get("activeMinutes") as string,
    sleepHours: formData.get("sleepHours") as string,
  };

  const result = validateLifestyle(raw);
  if (!result.success) return validationError(result.error.issues);

  const lifestyleData = Object.fromEntries(
    Object.entries(result.data).filter(([, v]) => v !== undefined),
  ) as Record<string, number>;

  const err = await createAssessment(userId, null, lifestyleData);
  if (err) return { error: err };

  redirect("/dashboard");
});
