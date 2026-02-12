import { redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { computeRisk, riskExplanation, type RiskInput } from "@/lib/risk";
import { calculateAge, calculateBmi } from "@/lib/health";
import RiskCard from "./risk-card";
import SignOutButton from "./sign-out-button";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) redirect("/");

  const baseline = await healthPrisma.baseline.findFirst({
    where: { userId },
  });

  if (!baseline) redirect("/onboarding");

  const assessment = await healthPrisma.assessment.findFirst({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });

  if (!assessment) redirect("/onboarding");

  // Fetch latest medical record if any
  const medical = await healthPrisma.medical.findFirst({
    where: { userId },
    orderBy: { recordedAt: "desc" },
  });

  const age = calculateAge(baseline.birthdate);
  const bmi = calculateBmi(baseline.weight, baseline.height);

  // Build risk input with medical data if available
  const medicalData = medical?.data as Record<string, number> | null;
  const riskInput: RiskInput = {
    age,
    bmi,
    smoker: baseline.smoker,
    diabetes: baseline.diabetes,
    ...(medicalData?.sbp !== undefined && { sbp: medicalData.sbp }),
    ...(medicalData?.ldl !== undefined && { ldl: medicalData.ldl }),
    ...(medicalData?.hdl !== undefined && { hdl: medicalData.hdl }),
    ...(medicalData?.glucose !== undefined && { glucose: medicalData.glucose }),
    ...(medicalData?.triglycerides !== undefined && { triglycerides: medicalData.triglycerides }),
  };

  const miExplanation = riskExplanation("mi", assessment.miScore, riskInput);
  const strokeExplanation = riskExplanation("stroke", assessment.strokeScore, riskInput);
  const hfExplanation = riskExplanation("hf", assessment.hfScore, riskInput);

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

        <section className="mb-8">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard/medical"
              className="rounded-lg border border-teal-600 px-4 py-2 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              Add Medical Data
            </Link>
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
              explanation={miExplanation}
            />
            <RiskCard
              title="Stroke"
              score={assessment.strokeScore}
              explanation={strokeExplanation}
            />
            <RiskCard
              title="Heart Failure"
              score={assessment.hfScore}
              explanation={hfExplanation}
            />
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
