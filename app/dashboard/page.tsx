import { redirect } from "next/navigation";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { healthPrisma } from "@/lib/prisma";
import { riskExplanation, buildRiskInput } from "@/lib/risk";
import RiskCard from "./risk-card";
import RiskChart, { type AssessmentPoint } from "./risk-chart";
import DataSourceDialog from "./data-source-dialog";
import SignOutButton from "./sign-out-button";

const MAX_ASSESSMENTS = 50;

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) redirect("/");

  const baseline = await healthPrisma.baseline.findUnique({
    where: { userId },
  });

  if (!baseline) redirect("/onboarding");

  // Parallel fetch: assessments, latest labs, latest lifestyle
  const [assessmentsDesc, labs, lifestyle] = await Promise.all([
    healthPrisma.assessment.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      take: MAX_ASSESSMENTS,
    }),
    healthPrisma.medical.findFirst({
      where: { userId },
      orderBy: { recordedAt: "desc" },
    }),
    healthPrisma.lifestyle.findFirst({
      where: { userId },
      orderBy: { recordedAt: "desc" },
    }),
  ]);

  if (assessmentsDesc.length === 0) redirect("/onboarding");

  const assessments = assessmentsDesc.reverse();
  const assessment = assessments[assessments.length - 1];

  // Build risk input with lab and lifestyle data if available
  const labsData = labs?.data as Record<string, number> | null;
  const lifestyleData = lifestyle?.data as Record<string, number> | null;
  const riskInput = buildRiskInput(baseline, labsData, lifestyleData);
  const { age, bmi } = riskInput;

  const miExplanation = riskExplanation("mi", assessment.miScore, riskInput);
  const strokeExplanation = riskExplanation(
    "stroke",
    assessment.strokeScore,
    riskInput,
  );
  const hfExplanation = riskExplanation("hf", assessment.hfScore, riskInput);

  // Format dates for the data source dialog
  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const labsDate = labs ? formatDate(labs.recordedAt) : null;
  const lifestyleDate = lifestyle ? formatDate(lifestyle.recordedAt) : null;

  // Build chart data
  const chartData: AssessmentPoint[] = assessments.map((a) => {
    const d = new Date(a.createdAt);
    const base = d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    const time = d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
    return { date: `${base}, ${time}`, mi: a.miScore, stroke: a.strokeScore, hf: a.hfScore };
  });

  return (
    <div className="min-h-screen bg-teal-50 dark:bg-black">
      <header className="border-b border-teal-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <h1 className="flex items-center gap-2 text-lg font-bold text-teal-600 dark:text-teal-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
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
        {/* Condensed profile summary */}
        <section className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-700 dark:text-zinc-300">
          <span>Age {age}</span>
          <span className="text-slate-300 dark:text-zinc-400 text-xl">&middot;</span>
          <span>BMI {bmi.toFixed(1)}</span>
          <span className="text-slate-300 dark:text-zinc-400 text-xl">&middot;</span>
          <span>{baseline.smoker ? "Smoker" : "Non-smoker"}</span>
          <span className="text-slate-300 dark:text-zinc-400 text-xl">&middot;</span>
          <span>{baseline.diabetes ? "Diabetes" : "No diabetes"}</span>
          <div className="m-auto lg:ml-auto lg:mr-0 flex gap-2">
            <Link
              href="/dashboard/labs"
              className="rounded-lg border border-teal-600 px-4 py-1.5 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              Add Lab Results
            </Link>
            <Link
              href="/dashboard/lifestyle"
              className="rounded-lg border border-teal-600 px-4 py-1.5 text-sm font-medium text-teal-600 transition-colors hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950"
            >
              Add Lifestyle Data
            </Link>
          </div>
        </section>

        {/* Latest Assessment risk cards */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-zinc-50">
              10-Year Risk Prediction
            </h2>
            <DataSourceDialog
              labsData={labsData}
              lifestyleData={lifestyleData}
              labsDate={labsDate}
              lifestyleDate={lifestyleDate}
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <RiskCard
              title="Heart Attack"
              score={assessment.miScore}
              explanation={miExplanation}
              accent="blue"
            />
            <RiskCard
              title="Stroke"
              score={assessment.strokeScore}
              explanation={strokeExplanation}
              accent="violet"
            />
            <RiskCard
              title="Heart Failure"
              score={assessment.hfScore}
              explanation={hfExplanation}
              accent="amber"
            />
          </div>
        </section>

        {/* Risk Over Time chart (only with 2+ assessments) */}
        {assessments.length >= 2 && (
          <section className="mt-8">
            <h2 className="mb-4 text-xl font-semibold text-slate-900 dark:text-zinc-50">
              Risk Over Time
            </h2>
            <div className="rounded-xl border border-teal-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
              <RiskChart assessments={chartData} />
            </div>
          </section>
        )}

        {/* Disclaimer */}
        <footer className="mt-10 border-t border-teal-100 pt-6 dark:border-zinc-800">
          <p className="text-center text-xs text-slate-400 dark:text-zinc-600">
            This tool is for educational and demonstration purposes only. It does
            not provide medical advice, diagnosis, or treatment recommendations.
            Risk estimates are simplified approximations and should not be used
            for clinical decision-making. Always consult a qualified healthcare
            professional for medical decisions.
          </p>
        </footer>
      </main>
    </div>
  );
}
