import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import RiskCard from "./risk-card";
import SignOutButton from "./sign-out-button";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session?.user) redirect("/");

  const baseline = await healthPrisma.baseline.findFirst({
    where: { userId: session.user.id },
  });

  if (!baseline) redirect("/onboarding");

  const assessment = await healthPrisma.assessment.findFirst({
    where: { userId: session.user.id },
    orderBy: { createdAt: "desc" },
  });

  if (!assessment) redirect("/onboarding");

  const now = new Date();
  const age =
    now.getFullYear() -
    baseline.birthdate.getFullYear() -
    (now <
    new Date(now.getFullYear(), baseline.birthdate.getMonth(), baseline.birthdate.getDate())
      ? 1
      : 0);
  const bmi = baseline.weight / (baseline.height / 100) ** 2;

  return (
    <div className="min-h-screen bg-teal-50 dark:bg-black">
      <header className="border-b border-teal-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold text-teal-600 dark:text-teal-400">
            My Heart Tracker
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-500 dark:text-zinc-400">
              {session.user.name}
            </span>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-8">
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-zinc-50">
            Your Profile
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Age" value={`${age}`} />
            <Stat label="BMI" value={bmi.toFixed(1)} />
            <Stat label="Smoker" value={baseline.smoker ? "Yes" : "No"} />
            <Stat label="Diabetes" value={baseline.diabetes ? "Yes" : "No"} />
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-zinc-50">
            10-Year Risk Assessment
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            <RiskCard
              title="Myocardial Infarction"
              score={assessment.miScore}
            />
            <RiskCard title="Stroke" score={assessment.strokeScore} />
            <RiskCard title="Heart Failure" score={assessment.hfScore} />
          </div>
        </section>
      </main>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-teal-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">
        {label}
      </p>
      <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-zinc-50">
        {value}
      </p>
    </div>
  );
}
