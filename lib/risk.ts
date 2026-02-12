interface RiskInput {
  age: number;
  bmi: number;
  smoker: boolean;
  diabetes: boolean;
}

interface RiskResult {
  mi: number;
  stroke: number;
  hf: number;
}

function baseRiskByAge(age: number): RiskResult {
  if (age < 40) return { mi: 2, stroke: 1, hf: 1 };
  if (age < 50) return { mi: 5, stroke: 3, hf: 2 };
  if (age < 60) return { mi: 10, stroke: 7, hf: 5 };
  if (age < 70) return { mi: 16, stroke: 12, hf: 10 };
  return { mi: 22, stroke: 18, hf: 16 };
}

function bmiMultiplier(bmi: number): number {
  if (bmi < 25) return 1.0;
  if (bmi < 30) return 1.3;
  return 1.6;
}

const SMOKING_RR = { mi: 2.2, stroke: 1.8, hf: 1.6 };
const DIABETES_RR = { mi: 1.8, stroke: 2.0, hf: 2.4 };

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function computeRisk(input: RiskInput): RiskResult {
  const base = baseRiskByAge(input.age);
  const bmiMul = bmiMultiplier(input.bmi);

  const keys = ["mi", "stroke", "hf"] as const;
  const result = {} as Record<string, number>;

  for (const key of keys) {
    let score = base[key] * bmiMul;
    if (input.smoker) score *= SMOKING_RR[key];
    if (input.diabetes) score *= DIABETES_RR[key];
    result[key] = clamp(Math.round(score), 0, 100);
  }

  return result as unknown as RiskResult;
}

export function riskLevel(score: number): string {
  if (score < 10) return "Low";
  if (score < 20) return "Moderate";
  if (score < 30) return "Elevated";
  return "High";
}

export function riskColor(score: number): string {
  if (score < 10) return "bg-emerald-500";
  if (score < 20) return "bg-yellow-500";
  if (score < 30) return "bg-orange-500";
  return "bg-red-500";
}
