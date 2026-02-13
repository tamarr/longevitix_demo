import { redirect } from "next/navigation";
import { getAuthenticatedUserId } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import LifestyleForm from "./lifestyle-form";

export default async function LifestylePage() {
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
            Add Lifestyle Data
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">
            Enter wearable or fitness data to refine your risk assessment. All
            fields are optional, but at least one is required.
          </p>
        </div>
        <LifestyleForm />
      </div>
    </div>
  );
}
