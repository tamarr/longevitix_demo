export interface RiskInput {
  age: number;
  bmi: number;
  smoker: boolean;
  diabetes: boolean;
  sbp?: number;   // systolic blood pressure (mmHg)
  ldl?: number;   // LDL cholesterol (mg/dL)
  hdl?: number;   // HDL cholesterol (mg/dL)
  glucose?: number;      // fasting blood glucose (mg/dL)
  triglycerides?: number; // triglycerides (mg/dL)
  restingHr?: number;     // resting heart rate (bpm)
  vo2max?: number;        // VO2 max (mL/kg/min)
  activeMinutes?: number; // active minutes per week
  sleepHours?: number;    // average sleep per night (hours)
  spo2?: number;          // blood oxygen saturation (%)
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

function spo2Multiplier(spo2: number): number {
  if (spo2 >= 96) return 1.0;
  if (spo2 >= 93) return 1.1;
  if (spo2 >= 90) return 1.2;
  return 1.35;
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

export function computeRisk(input: RiskInput): RiskResult {
  const base = baseRiskByAge(input.age);
  const bmiMul = bmiMultiplier(input.bmi);

  const keys = ["mi", "stroke", "hf"] as const;
  const result = {} as Record<string, number>;

  for (const key of keys) {
    let score = base[key] * bmiMul;
    if (input.smoker) score *= SMOKING_RR[key];
    if (input.diabetes) score *= DIABETES_RR[key];

    // Medical multipliers — applied only when data is provided
    if (input.sbp !== undefined) {
      score *= sbpMultiplier(input.sbp);
    }
    if (input.ldl !== undefined) {
      const mul = ldlMultiplier(input.ldl);
      score *= key === "hf" ? dampen(mul, 0.5) : mul;
    }
    if (input.hdl !== undefined) {
      const mul = hdlMultiplier(input.hdl);
      score *= key === "hf" ? dampen(mul, 0.5) : mul;
    }
    if (input.glucose !== undefined) {
      score *= glucoseMultiplier(input.glucose);
    }
    if (input.triglycerides !== undefined) {
      const mul = triglyceridesMultiplier(input.triglycerides);
      score *= key === "mi" ? mul : dampen(mul, 0.5);
    }

    // Lifestyle multipliers — applied only when data is provided
    if (input.restingHr !== undefined) {
      const mul = restingHrMultiplier(input.restingHr);
      score *= key === "hf" ? mul : dampen(mul, 0.7);
    }
    if (input.vo2max !== undefined) {
      score *= vo2maxMultiplier(input.vo2max);
    }
    if (input.activeMinutes !== undefined) {
      score *= activeMinutesMultiplier(input.activeMinutes);
    }
    if (input.sleepHours !== undefined) {
      score *= sleepMultiplier(input.sleepHours);
    }
    if (input.spo2 !== undefined) {
      const mul = spo2Multiplier(input.spo2);
      score *= key === "hf" ? mul : dampen(mul, 0.6);
    }

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

const CONDITION_LABELS: Record<string, string> = {
  mi: "Heart Attack",
  stroke: "Stroke",
  hf: "Heart Failure",
};

export function riskExplanation(
  key: "mi" | "stroke" | "hf",
  score: number,
  input: RiskInput
): RiskExplanation {
  const level = riskLevel(score);
  const label = CONDITION_LABELS[key];

  const factors: string[] = [];

  // Age factor
  if (input.age >= 70) {
    factors.push(`Age ${input.age} significantly increases base risk`);
  } else if (input.age >= 60) {
    factors.push(`Age ${input.age} increases base risk`);
  } else if (input.age >= 50) {
    factors.push(`Age ${input.age} moderately increases base risk`);
  } else {
    factors.push(`Age ${input.age} contributes low base risk`);
  }

  // BMI factor
  const bmi = input.bmi;
  if (bmi >= 30) {
    factors.push(`BMI ${bmi.toFixed(1)} (obese) adds +60% risk`);
  } else if (bmi >= 25) {
    factors.push(`BMI ${bmi.toFixed(1)} (overweight) adds +30% risk`);
  } else {
    factors.push(`BMI ${bmi.toFixed(1)} (normal) has no added risk`);
  }

  // Smoking
  if (input.smoker) {
    factors.push(`Smoking increases ${label.toLowerCase()} risk by ${Math.round((SMOKING_RR[key] - 1) * 100)}%`);
  }

  // Diabetes
  if (input.diabetes) {
    factors.push(`Diabetes increases ${label.toLowerCase()} risk by ${Math.round((DIABETES_RR[key] - 1) * 100)}%`);
  }

  // Medical factors — only if provided
  if (input.sbp !== undefined) {
    const mul = sbpMultiplier(input.sbp);
    if (mul > 1.0) {
      factors.push(`Blood pressure ${input.sbp} mmHg adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`Blood pressure ${input.sbp} mmHg is in the normal range`);
    }
  }

  if (input.ldl !== undefined) {
    const mul = ldlMultiplier(input.ldl);
    if (mul > 1.0) {
      factors.push(`LDL cholesterol ${input.ldl} mg/dL adds +${Math.round((mul - 1) * 100)}% risk`);
    } else if (mul < 1.0) {
      factors.push(`LDL cholesterol ${input.ldl} mg/dL is protective (-${Math.round((1 - mul) * 100)}%)`);
    } else {
      factors.push(`LDL cholesterol ${input.ldl} mg/dL is in the normal range`);
    }
  }

  if (input.hdl !== undefined) {
    const mul = hdlMultiplier(input.hdl);
    if (mul < 1.0) {
      factors.push(`HDL cholesterol ${input.hdl} mg/dL is protective (-${Math.round((1 - mul) * 100)}%)`);
    } else if (mul > 1.0) {
      factors.push(`Low HDL cholesterol ${input.hdl} mg/dL adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`HDL cholesterol ${input.hdl} mg/dL is in the normal range`);
    }
  }

  if (input.glucose !== undefined) {
    const mul = glucoseMultiplier(input.glucose);
    if (mul > 1.0) {
      factors.push(`Fasting glucose ${input.glucose} mg/dL adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`Fasting glucose ${input.glucose} mg/dL is in the normal range`);
    }
  }

  if (input.triglycerides !== undefined) {
    const mul = triglyceridesMultiplier(input.triglycerides);
    if (mul > 1.0) {
      factors.push(`Triglycerides ${input.triglycerides} mg/dL adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`Triglycerides ${input.triglycerides} mg/dL is in the normal range`);
    }
  }

  // Lifestyle factors — only if provided
  if (input.restingHr !== undefined) {
    const mul = restingHrMultiplier(input.restingHr);
    if (mul < 1.0) {
      factors.push(`Resting heart rate ${input.restingHr} bpm is protective (-${Math.round((1 - mul) * 100)}%)`);
    } else if (mul > 1.0) {
      factors.push(`Resting heart rate ${input.restingHr} bpm adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`Resting heart rate ${input.restingHr} bpm is in the normal range`);
    }
  }

  if (input.vo2max !== undefined) {
    const mul = vo2maxMultiplier(input.vo2max);
    if (mul < 1.0) {
      factors.push(`VO2 max ${input.vo2max} mL/kg/min is protective (-${Math.round((1 - mul) * 100)}%)`);
    } else if (mul > 1.0) {
      factors.push(`VO2 max ${input.vo2max} mL/kg/min adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`VO2 max ${input.vo2max} mL/kg/min is in the normal range`);
    }
  }

  if (input.activeMinutes !== undefined) {
    const mul = activeMinutesMultiplier(input.activeMinutes);
    if (mul < 1.0) {
      factors.push(`Active minutes ${input.activeMinutes}/week is protective (-${Math.round((1 - mul) * 100)}%)`);
    } else if (mul > 1.0) {
      factors.push(`Active minutes ${input.activeMinutes}/week adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`Active minutes ${input.activeMinutes}/week is in the normal range`);
    }
  }

  if (input.sleepHours !== undefined) {
    const mul = sleepMultiplier(input.sleepHours);
    if (mul < 1.0) {
      factors.push(`Sleep ${input.sleepHours} hours/night is protective (-${Math.round((1 - mul) * 100)}%)`);
    } else if (mul > 1.0) {
      factors.push(`Sleep ${input.sleepHours} hours/night adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`Sleep ${input.sleepHours} hours/night is in the normal range`);
    }
  }

  if (input.spo2 !== undefined) {
    const mul = spo2Multiplier(input.spo2);
    if (mul > 1.0) {
      factors.push(`SpO2 ${input.spo2}% adds +${Math.round((mul - 1) * 100)}% risk`);
    } else {
      factors.push(`SpO2 ${input.spo2}% is in the normal range`);
    }
  }

  // Meaning
  const approxOdds = Math.round(100 / Math.max(score, 1));
  const meaning =
    score < 5
      ? `A ${score}% 10-year risk means ${label.toLowerCase()} is unlikely in the next decade.`
      : `A ${score}% 10-year risk means roughly a 1 in ${approxOdds} chance of ${label.toLowerCase()} over the next 10 years.`;

  // Advice
  let advice: string;
  if (score >= 30) {
    advice = `Your ${label.toLowerCase()} risk is high. Discuss aggressive risk reduction with your doctor, including medication and lifestyle changes.`;
  } else if (score >= 20) {
    advice = `Your ${label.toLowerCase()} risk is elevated. Consider discussing statin therapy and blood pressure management with your doctor.`;
  } else if (score >= 10) {
    advice = `Your ${label.toLowerCase()} risk is moderate. Maintaining a healthy diet, regular exercise, and routine checkups can help.`;
  } else {
    advice = `Your ${label.toLowerCase()} risk is low. Continue healthy habits and attend regular checkups.`;
  }

  return {
    summary: `Your ${label} risk is ${level} at ${score}%`,
    factors,
    meaning,
    advice,
  };
}

// ---------------------------------------------------------------------------
// buildRiskInput — single source of truth for constructing RiskInput from
// baseline profile + opaque labs/lifestyle JSON blobs.
// ---------------------------------------------------------------------------

import { calculateAge, calculateBmi } from "./health";

const LABS_KEYS = ["sbp", "ldl", "hdl", "glucose", "triglycerides"] as const;
const LIFESTYLE_KEYS = ["restingHr", "vo2max", "activeMinutes", "sleepHours", "spo2"] as const;

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
  baseline: { birthdate: Date; height: number; weight: number; smoker: boolean; diabetes: boolean },
  labsData?: Record<string, number> | null,
  lifestyleData?: Record<string, number> | null,
): RiskInput {
  return {
    age: calculateAge(baseline.birthdate),
    bmi: calculateBmi(baseline.weight, baseline.height),
    smoker: baseline.smoker,
    diabetes: baseline.diabetes,
    ...pickDefined(LABS_KEYS, labsData),
    ...pickDefined(LIFESTYLE_KEYS, lifestyleData),
  };
}
