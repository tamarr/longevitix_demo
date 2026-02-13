import { z } from "zod";
import { calculateAge } from "@/lib/health";

const baselineSchema = z.object({
  birthdate: z
    .string()
    .min(1, "Date of birth is required.")
    .refine(
      (val) => {
        const birth = new Date(val);
        if (isNaN(birth.getTime())) return false;
        const age = calculateAge(birth);
        return age >= 18 && age <= 120;
      },
      { message: "Age must be between 18 and 120." }
    ),
  sex: z.enum(["male", "female"], { message: "Please select your biological sex." }),
  height: z.coerce
    .number({ message: "Height is required." })
    .min(100, "Height must be between 100-250 cm.")
    .max(250, "Height must be between 100-250 cm."),
  weight: z.coerce
    .number({ message: "Weight is required." })
    .min(30, "Weight must be between 30-300 kg.")
    .max(300, "Weight must be between 30-300 kg."),
  smoker: z.preprocess((val) => val === "on", z.boolean()),
  diabetes: z.preprocess((val) => val === "on", z.boolean()),
});

export function validateBaseline(data: Record<string, unknown>) {
  return baselineSchema.safeParse(data);
}
