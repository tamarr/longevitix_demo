import { riskLevel, riskColor } from "@/lib/risk";

interface RiskCardProps {
  title: string;
  score: number;
}

export default function RiskCard({ title, score }: RiskCardProps) {
  const level = riskLevel(score);
  const color = riskColor(score);

  return (
    <div className="rounded-xl border border-teal-100 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
        {title}
      </p>
      <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-zinc-50">
        {score}%
      </p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-teal-100 dark:bg-zinc-800">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${Math.min(score, 100)}%` }}
        />
      </div>
      <p className="mt-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
        {level}
      </p>
    </div>
  );
}
