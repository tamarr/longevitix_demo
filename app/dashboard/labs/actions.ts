"use server";

import { redirect } from "next/navigation";
import { withAuth, validationError } from "@/lib/auth";
import { createAssessment } from "@/lib/assessment";
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
  if (!result.success) return validationError(result.error.issues);

  const labsData = Object.fromEntries(
    Object.entries(result.data).filter(([, v]) => v !== undefined),
  ) as Record<string, number>;

  const err = await createAssessment(userId, labsData, null);
  if (err) return { error: err };

  redirect("/dashboard");
});
