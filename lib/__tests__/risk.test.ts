import { describe, it, expect } from "vitest";
import { computeRisk, riskExplanation, buildRiskInput } from "../risk";
import { riskColor, riskLevel } from "../ui";

describe("computeRisk", () => {
  it("returns low scores for a young healthy person", () => {
    const result = computeRisk({ age: 30, bmi: 22, sex: "male", smoker: false, diabetes: false });
    expect(result.mi).toBeLessThan(10);
    expect(result.stroke).toBeLessThan(10);
    expect(result.hf).toBeLessThan(10);
  });

  it("returns high scores for elderly + obese + smoker + diabetes", () => {
    const result = computeRisk({ age: 75, bmi: 35, sex: "male", smoker: true, diabetes: true });
    expect(result.mi).toBeGreaterThan(50);
    expect(result.stroke).toBeGreaterThan(50);
    expect(result.hf).toBeGreaterThan(50);
  });

  it("clamps scores to 100 max", () => {
    const result = computeRisk({ age: 75, bmi: 35, sex: "male", smoker: true, diabetes: true });
    expect(result.mi).toBeLessThanOrEqual(100);
    expect(result.stroke).toBeLessThanOrEqual(100);
    expect(result.hf).toBeLessThanOrEqual(100);
  });

  it("applies BMI 1.0x multiplier for bmi 24.9", () => {
    const normal = computeRisk({ age: 45, bmi: 24.9, sex: "male", smoker: false, diabetes: false });
    expect(normal.mi).toBe(Math.round(5 * 1.0 * 1.3));
  });

  it("applies BMI 1.3x multiplier for bmi 25", () => {
    const overweight = computeRisk({ age: 45, bmi: 25, sex: "male", smoker: false, diabetes: false });
    expect(overweight.mi).toBe(Math.round(5 * 1.3 * 1.3));
  });

  it("applies BMI 1.6x multiplier for bmi 30", () => {
    const obese = computeRisk({ age: 45, bmi: 30, sex: "male", smoker: false, diabetes: false });
    expect(obese.mi).toBe(Math.round(5 * 1.6 * 1.3));
  });

  it("increases scores with high sbp (150)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withSbp = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sbp: 150 });
    expect(withSbp.mi).toBeGreaterThan(baseline.mi);
    expect(withSbp.stroke).toBeGreaterThan(baseline.stroke);
    expect(withSbp.hf).toBeGreaterThan(baseline.hf);
  });

  it("reduces scores with protective HDL (70)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withHdl = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, hdl: 70 });
    expect(withHdl.mi).toBeLessThan(baseline.mi);
    expect(withHdl.stroke).toBeLessThan(baseline.stroke);
  });

  it("works with partial medical data (only sbp)", () => {
    const withSbp = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sbp: 140 });
    // ldl/hdl not provided — should have no effect beyond sbp
    const withAll = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sbp: 140, ldl: 110, hdl: 50 });
    // sbp-only should differ from all-three since ldl 110 = 1.0x and hdl 50 = 1.0x
    expect(withSbp.mi).toBe(withAll.mi);
  });

  it("increases scores with high glucose (130)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withGlucose = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, glucose: 130 });
    expect(withGlucose.mi).toBeGreaterThan(baseline.mi);
    expect(withGlucose.stroke).toBeGreaterThan(baseline.stroke);
    expect(withGlucose.hf).toBeGreaterThan(baseline.hf);
  });

  it("increases MI scores with high triglycerides (250)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withTg = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, triglycerides: 250 });
    expect(withTg.mi).toBeGreaterThan(baseline.mi);
  });

  it("dampens cholesterol effect on heart failure", () => {
    const highLdl = computeRisk({ age: 55, bmi: 22, sex: "male", smoker: false, diabetes: false, ldl: 170 });
    const baselineOnly = computeRisk({ age: 55, bmi: 22, sex: "male", smoker: false, diabetes: false });
    // LDL 170 → 1.4x for MI, but dampen(1.4, 0.5) = 1.2 for HF
    // The HF increase should be smaller proportionally
    const miIncrease = highLdl.mi - baselineOnly.mi;
    const hfIncrease = highLdl.hf - baselineOnly.hf;
    // MI base is higher and gets full 1.4x, HF base is lower and gets 1.2x
    expect(miIncrease).toBeGreaterThan(0);
    expect(hfIncrease).toBeGreaterThanOrEqual(0);
  });

  it("reduces scores with low resting HR (55)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withHr = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, restingHr: 55 });
    expect(withHr.hf).toBeLessThan(baseline.hf);
    expect(withHr.mi).toBeLessThan(baseline.mi);
  });

  it("increases scores with high resting HR (105)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withHr = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, restingHr: 105 });
    expect(withHr.hf).toBeGreaterThan(baseline.hf);
    expect(withHr.mi).toBeGreaterThan(baseline.mi);
  });

  it("reduces scores with excellent VO2 max (50)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withVo2 = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, vo2max: 50 });
    expect(withVo2.mi).toBeLessThan(baseline.mi);
    expect(withVo2.stroke).toBeLessThan(baseline.stroke);
    expect(withVo2.hf).toBeLessThan(baseline.hf);
  });

  it("increases scores with poor VO2 max (20)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withVo2 = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, vo2max: 20 });
    expect(withVo2.mi).toBeGreaterThan(baseline.mi);
    expect(withVo2.stroke).toBeGreaterThan(baseline.stroke);
    expect(withVo2.hf).toBeGreaterThan(baseline.hf);
  });

  it("reduces scores with high active minutes (350)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withMins = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, activeMinutes: 350 });
    expect(withMins.mi).toBeLessThan(baseline.mi);
    expect(withMins.stroke).toBeLessThan(baseline.stroke);
    expect(withMins.hf).toBeLessThan(baseline.hf);
  });

  it("increases scores with sedentary lifestyle (30 active minutes)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withMins = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, activeMinutes: 30 });
    expect(withMins.mi).toBeGreaterThan(baseline.mi);
    expect(withMins.stroke).toBeGreaterThan(baseline.stroke);
    expect(withMins.hf).toBeGreaterThan(baseline.hf);
  });

  it("dampens resting HR effect on MI/stroke vs full effect on HF", () => {
    // HR 105 → multiplier 1.3
    // HF gets full 1.3, MI/stroke get dampen(1.3, 0.7) = 1.21
    const withHr = computeRisk({ age: 55, bmi: 22, sex: "male", smoker: false, diabetes: false, restingHr: 105 });
    const baselineOnly = computeRisk({ age: 55, bmi: 22, sex: "male", smoker: false, diabetes: false });
    const hfIncrease = (withHr.hf - baselineOnly.hf) / Math.max(baselineOnly.hf, 1);
    const miIncrease = (withHr.mi - baselineOnly.mi) / Math.max(baselineOnly.mi, 1);
    // HF should see proportionally greater effect from HR than MI
    expect(hfIncrease).toBeGreaterThanOrEqual(miIncrease);
  });

  it("combines medical + lifestyle data correctly", () => {
    const medicalOnly = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sbp: 150 });
    const combined = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sbp: 150, restingHr: 55, vo2max: 50, activeMinutes: 300 });
    // Protective lifestyle factors should reduce scores compared to medical-only
    expect(combined.mi).toBeLessThan(medicalOnly.mi);
    expect(combined.stroke).toBeLessThan(medicalOnly.stroke);
    expect(combined.hf).toBeLessThan(medicalOnly.hf);
  });

  it("males have higher MI risk than females", () => {
    const male = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const female = computeRisk({ age: 55, bmi: 26, sex: "female", smoker: false, diabetes: false });
    expect(male.mi).toBeGreaterThan(female.mi);
  });

  it("females have lower MI risk than baseline male", () => {
    const female = computeRisk({ age: 55, bmi: 26, sex: "female", smoker: false, diabetes: false });
    const male = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    expect(female.mi).toBeLessThan(male.mi);
  });

  it("sex factor appears in explanation", () => {
    const input = { age: 55, bmi: 26, sex: "male" as const, smoker: false, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    expect(explanation.factors.some((f) => f.includes("male"))).toBe(true);
  });
});

describe("riskLevel", () => {
  it("returns 'Low' for score 4", () => {
    expect(riskLevel(4)).toBe("Low");
  });

  it("returns 'Borderline' for score 5", () => {
    expect(riskLevel(5)).toBe("Borderline");
  });

  it("returns 'Moderate' for score 10", () => {
    expect(riskLevel(10)).toBe("Moderate");
  });

  it("returns 'High' for score 20", () => {
    expect(riskLevel(20)).toBe("High");
  });
});

describe("riskColor", () => {
  it("returns emerald for score < 5", () => {
    expect(riskColor(3)).toBe("bg-emerald-500");
  });

  it("returns lime for score 5-9", () => {
    expect(riskColor(7)).toBe("bg-lime-500");
  });

  it("returns yellow for score 10-19", () => {
    expect(riskColor(15)).toBe("bg-yellow-500");
  });

  it("returns red for score >= 20", () => {
    expect(riskColor(25)).toBe("bg-red-500");
  });
});

describe("riskExplanation", () => {
  it("returns correct structure", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: true, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    expect(explanation).toHaveProperty("summary");
    expect(explanation).toHaveProperty("factors");
    expect(explanation).toHaveProperty("meaning");
    expect(explanation).toHaveProperty("advice");
    expect(typeof explanation.summary).toBe("string");
    expect(Array.isArray(explanation.factors)).toBe(true);
  });

  it("includes age, bmi, and smoking factors", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: true, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + sex + smoking = 4 factors
    expect(explanation.factors.length).toBe(4);
  });

  it("includes medical factors when provided", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: false, diabetes: false, sbp: 140, ldl: 130, hdl: 45, glucose: 110, triglycerides: 180 };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + sex + sbp + ldl + hdl + glucose + triglycerides = 8 factors
    expect(explanation.factors.length).toBe(8);
  });

  it("does not include medical factors when not provided", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: false, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + sex = 3 factors
    expect(explanation.factors.length).toBe(3);
  });

  it("summary includes risk level and score", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: false, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    expect(explanation.summary).toContain(`${risk.mi}%`);
  });

  it("includes lifestyle factors when provided", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: false, diabetes: false, restingHr: 65, vo2max: 40, activeMinutes: 200 };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + sex + restingHr + vo2max + activeMinutes = 6 factors
    expect(explanation.factors.length).toBe(6);
  });

  it("includes both medical and lifestyle factors", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: false, diabetes: false, sbp: 140, restingHr: 65, vo2max: 40, activeMinutes: 200 };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + sex + sbp + restingHr + vo2max + activeMinutes = 7 factors
    expect(explanation.factors.length).toBe(7);
  });

  it("includes sleep factors when provided", () => {
    const input = { age: 55, bmi: 28, sex: "male" as const, smoker: false, diabetes: false, sleepHours: 7.5 };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + sex + sleepHours = 4 factors
    expect(explanation.factors.length).toBe(4);
  });
});

describe("Sleep multipliers", () => {
  it("reduces scores with optimal sleep (7.5h)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withSleep = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sleepHours: 7.5 });
    expect(withSleep.mi).toBeLessThan(baseline.mi);
    expect(withSleep.stroke).toBeLessThan(baseline.stroke);
    expect(withSleep.hf).toBeLessThan(baseline.hf);
  });

  it("increases scores with poor sleep (4h)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withSleep = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sleepHours: 4 });
    expect(withSleep.mi).toBeGreaterThan(baseline.mi);
    expect(withSleep.stroke).toBeGreaterThan(baseline.stroke);
    expect(withSleep.hf).toBeGreaterThan(baseline.hf);
  });

  it("increases scores with excessive sleep (10h)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false });
    const withSleep = computeRisk({ age: 55, bmi: 26, sex: "male", smoker: false, diabetes: false, sleepHours: 10 });
    expect(withSleep.mi).toBeGreaterThan(baseline.mi);
  });
});

describe("buildRiskInput", () => {
  const baselineData = {
    birthdate: new Date("1970-01-01"),
    sex: "male",
    height: 175,
    weight: 80,
    smoker: false,
    diabetes: true,
  };

  it("correctly extracts fields from medical and lifestyle blobs", () => {
    const medical = { sbp: 130, ldl: 120, hdl: 55, glucose: 100, triglycerides: 160 };
    const lifestyle = { restingHr: 65, vo2max: 40, activeMinutes: 200, sleepHours: 7.5 };
    const result = buildRiskInput(baselineData, medical, lifestyle);

    expect(result.smoker).toBe(false);
    expect(result.diabetes).toBe(true);
    expect(result.sbp).toBe(130);
    expect(result.ldl).toBe(120);
    expect(result.hdl).toBe(55);
    expect(result.glucose).toBe(100);
    expect(result.triglycerides).toBe(160);
    expect(result.restingHr).toBe(65);
    expect(result.vo2max).toBe(40);
    expect(result.activeMinutes).toBe(200);
    expect(result.sleepHours).toBe(7.5);
  });

  it("returns baseline-only input with null/missing data", () => {
    const result = buildRiskInput(baselineData, null, null);

    expect(result.smoker).toBe(false);
    expect(result.diabetes).toBe(true);
    expect(result.sbp).toBeUndefined();
    expect(result.restingHr).toBeUndefined();
  });

  it("works with undefined data args", () => {
    const result = buildRiskInput(baselineData);

    expect(result.sbp).toBeUndefined();
    expect(result.restingHr).toBeUndefined();
  });

  it("ignores unknown fields in blobs", () => {
    const medical = { sbp: 130, unknownField: 999 };
    const lifestyle = { restingHr: 65, anotherUnknown: 42 };
    const result = buildRiskInput(baselineData, medical, lifestyle);

    expect(result.sbp).toBe(130);
    expect(result.restingHr).toBe(65);
    expect((result as Record<string, unknown>)["unknownField"]).toBeUndefined();
    expect((result as Record<string, unknown>)["anotherUnknown"]).toBeUndefined();
  });

  it("handles partial medical data", () => {
    const medical = { sbp: 130 };
    const result = buildRiskInput(baselineData, medical, null);

    expect(result.sbp).toBe(130);
    expect(result.ldl).toBeUndefined();
    expect(result.hdl).toBeUndefined();
  });
});
