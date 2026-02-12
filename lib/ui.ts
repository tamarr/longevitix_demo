export function riskColor(score: number): string {
  if (score < 10) return "bg-emerald-500";
  if (score < 20) return "bg-yellow-500";
  if (score < 30) return "bg-orange-500";
  return "bg-red-500";
}