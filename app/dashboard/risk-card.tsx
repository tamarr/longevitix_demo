"use client";

import { riskColor, RISK_TYPES, type ConditionKey } from "@/lib/ui";
import type { RiskExplanation } from "@/lib/risk";

interface RiskCardProps {
  conditionKey: ConditionKey;
  score: number;
  explanation: RiskExplanation;
  expanded: boolean;
  onToggle: () => void;
}

export default function RiskCard({ conditionKey, score, explanation, expanded, onToggle }: RiskCardProps) {
  const { label, accent } = RISK_TYPES[conditionKey];
  const color = riskColor(score);

  return (
    <div
      className={`rounded-xl border ${accent.border} border-l-4 bg-white p-5 dark:bg-zinc-950`}
      style={{ boxShadow: accent.shadow }}
    >
      <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
        {label}
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
      <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
        {explanation.summary}
      </p>

      <button
        type="button"
        onClick={onToggle}
        className="mt-3 text-xs font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
      >
        {expanded ? "Show less" : "Learn more"}
      </button>

      {expanded && (
        <div className="mt-3 space-y-3 border-t border-teal-100 pt-3 dark:border-zinc-800">
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
              Contributing factors
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-xs text-slate-600 dark:text-zinc-400">
              {explanation.factors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
              What it means
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
              {explanation.meaning}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300">
              What to do
            </p>
            <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400">
              {explanation.advice}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
