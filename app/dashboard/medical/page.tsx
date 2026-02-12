import { redirect } from "next/navigation";
import { getAuthenticatedUserId } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import MedicalForm from "./medical-form";

export default async function MedicalPage() {
  const userId = await getAuthenticatedUserId();
  if (!userId) redirect("/");

  const baseline = await healthPrisma.baseline.findFirst({
    where: { userId },
  });

  if (!baseline) redirect("/onboarding");

  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 dark:bg-black">
      <div className="w-full max-w-lg space-y-6 rounded-2xl border border-teal-100 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Add Medical Data
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">
            Enter clinical measurements from a recent doctor visit to refine
            your risk assessment. All fields are optional, but at least one is
            required.
          </p>
        </div>
        <MedicalForm />
      </div>
    </div>
  );
}
