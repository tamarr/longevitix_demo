import { RISK_TYPES, riskLevel, type ConditionKey } from "./ui";
import { calculateAge, calculateBmi } from "./health";

export interface RiskInput {
  age: number;
  bmi: number;
  sex: "male" | "female";
  smoker: boolean;
  diabetes: boolean;
  sbp?: number;          // systolic blood pressure (mmHg)
  ldl?: number;          // LDL cholesterol (mg/dL)
  hdl?: number;          // HDL cholesterol (mg/dL)
  glucose?: number;      // fasting blood glucose (mg/dL)
  triglycerides?: number; // triglycerides (mg/dL)
  restingHr?: number;     // resting heart rate (bpm)
  vo2max?: number;        // VO2 max (mL/kg/min)
  activeMinutes?: number; // active minutes per week
  sleepHours?: number;    // average sleep per night (hours)
}

interface RiskResult {
  mi: number;
  stroke: number;
  hf: number;
}

export interface RiskExplanation {
  summary: string;
  factors: string[];
  meaning: string;
  advice: string;
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

const SEX_RR: Record<string, RiskResult> = {
  male: { mi: 1.3, stroke: 1.1, hf: 1.2 },
  female: { mi: 0.7, stroke: 0.9, hf: 0.8 },
};

function sbpMultiplier(sbp: number): number {
  if (sbp < 120) return 1.0;
  if (sbp < 130) return 1.1;
  if (sbp < 140) return 1.3;
  return 1.5;
}

function ldlMultiplier(ldl: number): number {
  if (ldl < 100) return 0.9;
  if (ldl < 130) return 1.0;
  if (ldl < 160) return 1.2;
  return 1.4;
}

function hdlMultiplier(hdl: number): number {
  if (hdl >= 60) return 0.8;
  if (hdl >= 40) return 1.0;
  return 1.4;
}

function glucoseMultiplier(glucose: number): number {
  if (glucose < 100) return 1.0;
  if (glucose < 126) return 1.2;
  return 1.4;
}

function triglyceridesMultiplier(tg: number): number {
  if (tg < 150) return 1.0;
  if (tg < 200) return 1.1;
  if (tg < 500) return 1.3;
  return 1.5;
}

function restingHrMultiplier(hr: number): number {
  if (hr < 60) return 0.85;
  if (hr < 80) return 1.0;
  if (hr < 100) return 1.15;
  return 1.3;
}

function vo2maxMultiplier(vo2: number): number {
  if (vo2 > 45) return 0.75;
  if (vo2 >= 35) return 0.9;
  if (vo2 >= 25) return 1.0;
  return 1.2;
}

function activeMinutesMultiplier(mins: number): number {
  if (mins >= 300) return 0.8;
  if (mins >= 150) return 0.9;
  if (mins >= 75) return 1.0;
  return 1.2;
}

function sleepMultiplier(hours: number): number {
  if (hours >= 7 && hours <= 9) return 0.9;
  if (hours > 9) return 1.2;
  if (hours >= 6) return 1.0;
  if (hours >= 5) return 1.15;
  return 1.2;
}

/** Lerp a multiplier toward 1.0 by the given factor (0 = no effect, 1 = full effect) */
function dampen(multiplier: number, strength: number): number {
  return 1.0 + (multiplier - 1.0) * strength;
}

const SMOKING_RR = { mi: 2.2, stroke: 1.8, hf: 1.6 };
const DIABETES_RR = { mi: 1.8, stroke: 2.0, hf: 2.4 };

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

// ---------------------------------------------------------------------------
// Measure factor config — ties each optional input to its multiplier,
// per-condition dampening, and explanation formatting.
// ---------------------------------------------------------------------------

type MeasureKey = Exclude<keyof RiskInput, "age" | "bmi" | "sex" | "smoker" | "diabetes">;

interface MeasureFactor {
  key: MeasureKey;
  multiplier: (value: number) => number;
  dampen: Record<ConditionKey, number>;
  describe: (value: number) => string;
  describeRisk?: (value: number) => string;
}

const CONDITION_KEYS: readonly ConditionKey[] = ["mi", "stroke", "hf"];

const MEASURE_FACTORS: MeasureFactor[] = [
  { key: "sbp",            multiplier: sbpMultiplier,           dampen: { mi: 1, stroke: 1, hf: 1 },     describe: (v) => `Blood pressure ${v} mmHg` },
  { key: "ldl",            multiplier: ldlMultiplier,           dampen: { mi: 1, stroke: 1, hf: 0.5 },   describe: (v) => `LDL cholesterol ${v} mg/dL` },
  { key: "hdl",            multiplier: hdlMultiplier,           dampen: { mi: 1, stroke: 1, hf: 0.5 },   describe: (v) => `HDL cholesterol ${v} mg/dL`, describeRisk: (v) => `Low HDL cholesterol ${v} mg/dL` },
  { key: "glucose",        multiplier: glucoseMultiplier,       dampen: { mi: 1, stroke: 1, hf: 1 },     describe: (v) => `Fasting glucose ${v} mg/dL` },
  { key: "triglycerides",  multiplier: triglyceridesMultiplier, dampen: { mi: 1, stroke: 0.5, hf: 0.5 }, describe: (v) => `Triglycerides ${v} mg/dL` },
  { key: "restingHr",      multiplier: restingHrMultiplier,     dampen: { mi: 0.7, stroke: 0.7, hf: 1 }, describe: (v) => `Resting heart rate ${v} bpm` },
  { key: "vo2max",         multiplier: vo2maxMultiplier,        dampen: { mi: 1, stroke: 1, hf: 1 },     describe: (v) => `VO2 max ${v} mL/kg/min` },
  { key: "activeMinutes",  multiplier: activeMinutesMultiplier, dampen: { mi: 1, stroke: 1, hf: 1 },     describe: (v) => `Active minutes ${v}/week` },
  { key: "sleepHours",     multiplier: sleepMultiplier,         dampen: { mi: 1, stroke: 1, hf: 1 },     describe: (v) => `Sleep ${v} hours/night` },
];

export function computeRisk(input: RiskInput): RiskResult {
  const base = baseRiskByAge(input.age);
  const bmiMul = bmiMultiplier(input.bmi);
  const sexRr = SEX_RR[input.sex];
  const result: RiskResult = { mi: 0, stroke: 0, hf: 0 };

  for (const key of CONDITION_KEYS) {
    let score = base[key] * bmiMul;

    if (sexRr) score *= sexRr[key];
    if (input.smoker) score *= SMOKING_RR[key];
    if (input.diabetes) score *= DIABETES_RR[key];

    for (const factor of MEASURE_FACTORS) {
      const value = input[factor.key];
      if (value !== undefined) {
        score *= dampen(factor.multiplier(value), factor.dampen[key]);
      }
    }

    result[key] = clamp(Math.round(score), 0, 100);
  }

  return result;
}

function describeMultiplier(factor: MeasureFactor, value: number, mul: number): string {
  const display = factor.describe(value);
  if (mul > 1.0) {
    const label = factor.describeRisk?.(value) ?? display;
    return `${label} adds +${Math.round((mul - 1) * 100)}% risk`;
  }
  if (mul < 1.0) {
    return `${display} is protective (-${Math.round((1 - mul) * 100)}%)`;
  }
  return `${display} is in the normal range`;
}

export function riskExplanation(
  key: ConditionKey,
  score: number,
  input: RiskInput
): RiskExplanation {
  const level = riskLevel(score);
  const label = RISK_TYPES[key].label;

  const factors: string[] = [];

  // Baseline factors (non-configurable — each has unique explanation logic)
  if (input.age >= 70) {
    factors.push(`Age ${input.age} significantly increases base risk`);
  } else if (input.age >= 60) {
    factors.push(`Age ${input.age} increases base risk`);
  } else if (input.age >= 50) {
    factors.push(`Age ${input.age} moderately increases base risk`);
  } else {
    factors.push(`Age ${input.age} contributes low base risk`);
  }

  const bmi = input.bmi;
  if (bmi >= 30) {
    factors.push(`BMI ${bmi.toFixed(1)} (obese) adds +60% risk`);
  } else if (bmi >= 25) {
    factors.push(`BMI ${bmi.toFixed(1)} (overweight) adds +30% risk`);
  } else {
    factors.push(`BMI ${bmi.toFixed(1)} (normal) has no added risk`);
  }

  const sexRr = SEX_RR[input.sex];
  if (sexRr) {
    const mul = sexRr[key];
    if (mul > 1.0) {
      factors.push(`Being ${input.sex} adds +${Math.round((mul - 1) * 100)}% ${label.toLowerCase()} risk`);
    } else if (mul < 1.0) {
      factors.push(`Being ${input.sex} is protective (-${Math.round((1 - mul) * 100)}% ${label.toLowerCase()} risk)`);
    }
  }

  if (input.smoker) {
    factors.push(`Smoking increases ${label.toLowerCase()} risk by ${Math.round((SMOKING_RR[key] - 1) * 100)}%`);
  }

  if (input.diabetes) {
    factors.push(`Diabetes increases ${label.toLowerCase()} risk by ${Math.round((DIABETES_RR[key] - 1) * 100)}%`);
  }

  // Measure factors — driven by MEASURE_FACTORS config
  for (const factor of MEASURE_FACTORS) {
    const value = input[factor.key];
    if (value !== undefined) {
      factors.push(describeMultiplier(factor, value, factor.multiplier(value)));
    }
  }

  const meaning =
    score < 5
      ? `A score of ${score} out of 100 suggests ${label.toLowerCase()} risk is low.`
      : score < 20
        ? `A score of ${score} out of 100 indicates a moderate level of ${label.toLowerCase()} risk worth monitoring.`
        : `A score of ${score} out of 100 indicates elevated ${label.toLowerCase()} risk that warrants attention.`;

  let advice: string;
  if (score >= 20) {
    advice = `Your ${label.toLowerCase()} risk is high. Discuss aggressive risk reduction with your doctor, including medication and lifestyle changes.`;
  } else if (score >= 10) {
    advice = `Your ${label.toLowerCase()} risk is moderate. Consider discussing statin therapy and blood pressure management with your doctor.`;
  } else if (score >= 5) {
    advice = `Your ${label.toLowerCase()} risk is borderline. Maintaining a healthy diet, regular exercise, and routine checkups can help.`;
  } else {
    advice = `Your ${label.toLowerCase()} risk is low. Continue healthy habits and attend regular checkups.`;
  }

  return {
    summary: `${level} — ${score} / 100`,
    factors,
    meaning,
    advice,
  };
}

// ---------------------------------------------------------------------------
// buildRiskInput — single source of truth for constructing RiskInput from
// baseline profile + opaque labs/lifestyle JSON blobs.
// ---------------------------------------------------------------------------

const LABS_KEYS = ["sbp", "ldl", "hdl", "glucose", "triglycerides"] as const;
const LIFESTYLE_KEYS = ["restingHr", "vo2max", "activeMinutes", "sleepHours"] as const;

function pickDefined<K extends string>(
  keys: readonly K[],
  record: Record<string, number> | null | undefined,
): Partial<Record<K, number>> {
  const out: Partial<Record<K, number>> = {};
  if (!record) return out;
  for (const k of keys) {
    if (record[k] !== undefined) {
      out[k] = record[k];
    }
  }
  return out;
}

export function buildRiskInput(
  baseline: { birthdate: Date; sex: string; height: number; weight: number; smoker: boolean; diabetes: boolean },
  labsData?: Record<string, number> | null,
  lifestyleData?: Record<string, number> | null,
): RiskInput {
  return {
    age: calculateAge(baseline.birthdate),
    bmi: calculateBmi(baseline.weight, baseline.height),
    sex: baseline.sex as "male" | "female",
    smoker: baseline.smoker,
    diabetes: baseline.diabetes,
    ...pickDefined(LABS_KEYS, labsData),
    ...pickDefined(LIFESTYLE_KEYS, lifestyleData),
  };
}
