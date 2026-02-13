import { z } from "zod";

const lifestyleSchema = z
  .object({
    restingHr: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "Resting heart rate must be a number." })
        .min(30, "Resting heart rate must be between 30–220 bpm.")
        .max(220, "Resting heart rate must be between 30–220 bpm."),
    ]).optional(),
    vo2max: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "VO2 max must be a number." })
        .min(10, "VO2 max must be between 10–90 mL/kg/min.")
        .max(90, "VO2 max must be between 10–90 mL/kg/min."),
    ]).optional(),
    activeMinutes: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "Active minutes must be a number." })
        .min(0, "Active minutes must be between 0–2520 per week.")
        .max(2520, "Active minutes must be between 0–2520 per week."),
    ]).optional(),
    sleepHours: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "Sleep hours must be a number." })
        .min(1, "Sleep hours must be between 1–16.")
        .max(16, "Sleep hours must be between 1–16."),
    ]).optional(),
    spo2: z.union([
      z.literal("").transform(() => undefined),
      z.coerce
        .number({ message: "SpO2 must be a number." })
        .min(70, "SpO2 must be between 70–100%.")
        .max(100, "SpO2 must be between 70–100%."),
    ]).optional(),
  })
  .refine(
    (data) =>
      data.restingHr !== undefined || data.vo2max !== undefined ||
      data.activeMinutes !== undefined ||
      data.sleepHours !== undefined || data.spo2 !== undefined,
    { message: "Please provide at least one measurement." }
  );

export function validateLifestyle(data: Record<string, unknown>) {
  return lifestyleSchema.safeParse(data);
}
