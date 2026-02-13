import { z } from "zod";

const labsSchema = z
  .object({
    sbp: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "Systolic blood pressure must be a number." })
        .min(60, "Systolic blood pressure must be between 60–250 mmHg.")
        .max(250, "Systolic blood pressure must be between 60–250 mmHg."),
    ]).optional(),
    ldl: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "LDL cholesterol must be a number." })
        .min(20, "LDL cholesterol must be between 20–400 mg/dL.")
        .max(400, "LDL cholesterol must be between 20–400 mg/dL."),
    ]).optional(),
    hdl: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "HDL cholesterol must be a number." })
        .min(10, "HDL cholesterol must be between 10–150 mg/dL.")
        .max(150, "HDL cholesterol must be between 10–150 mg/dL."),
    ]).optional(),
    glucose: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "Fasting glucose must be a number." })
        .min(30, "Fasting glucose must be between 30–600 mg/dL.")
        .max(600, "Fasting glucose must be between 30–600 mg/dL."),
    ]).optional(),
    triglycerides: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "Triglycerides must be a number." })
        .min(20, "Triglycerides must be between 20–2000 mg/dL.")
        .max(2000, "Triglycerides must be between 20–2000 mg/dL."),
    ]).optional(),
  })
  .refine(
    (data) =>
      data.sbp !== undefined || data.ldl !== undefined || data.hdl !== undefined ||
      data.glucose !== undefined || data.triglycerides !== undefined,
    { message: "Please provide at least one measurement." }
  );

export function validateLabs(data: Record<string, unknown>) {
  return labsSchema.safeParse(data);
}
