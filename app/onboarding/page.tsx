import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import BaselineForm from "./baseline-form";

export default async function OnboardingPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/");

  const existing = await healthPrisma.baseline.findFirst({
    where: { userId: session.user.id },
  });

  if (existing) redirect("/dashboard");

  return (
    <div className="flex min-h-screen items-center justify-center bg-teal-50 dark:bg-black">
      <div className="w-full max-w-lg space-y-6 rounded-2xl border border-teal-100 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-zinc-50">
            Baseline Health Data
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400">
            Enter your baseline data to generate your initial risk assessment.
          </p>
        </div>
        <BaselineForm />
      </div>
    </div>
  );
}
