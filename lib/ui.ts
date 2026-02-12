export function riskColor(score: number): string {
  if (score < 10) return "bg-emerald-500";
  if (score < 20) return "bg-yellow-500";
  if (score < 30) return "bg-orange-500";
  return "bg-red-500";
}

export function riskBorderColor(score: number): string {
  if (score < 10) return "border-l-emerald-500";
  if (score < 20) return "border-l-yellow-500";
  if (score < 30) return "border-l-orange-500";
  return "border-l-red-500";
}
