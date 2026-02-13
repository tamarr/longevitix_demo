export type ConditionKey = "mi" | "stroke" | "hf";

export const RISK_TYPES: Record<ConditionKey, {
  label: string;
  accent: { border: string; shadow: string };
  chartColor: string;
}> = {
  mi: {
    label: "Heart Attack",
    accent: { border: "border-blue-400", shadow: "0 4px 14px -2px rgba(96,165,250,0.3)" },
    chartColor: "#60a5fa",
  },
  stroke: {
    label: "Stroke",
    accent: { border: "border-violet-400", shadow: "0 4px 14px -2px rgba(167,139,250,0.3)" },
    chartColor: "#a78bfa",
  },
  hf: {
    label: "Heart Failure",
    accent: { border: "border-amber-400", shadow: "0 4px 14px -2px rgba(251,191,36,0.3)" },
    chartColor: "#fbbf24",
  },
};

export function riskColor(score: number): string {
  if (score < 5) return "bg-emerald-500";
  if (score < 10) return "bg-lime-500";
  if (score < 20) return "bg-yellow-500";
  return "bg-red-500";
}

export function riskLevel(score: number): string {
  if (score < 5) return "Low";
  if (score < 10) return "Borderline";
  if (score < 20) return "Moderate";
  return "High";
}
