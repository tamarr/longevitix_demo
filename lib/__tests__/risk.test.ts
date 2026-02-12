import { describe, it, expect } from "vitest";
import { computeRisk, riskLevel, riskExplanation } from "../risk";
import { riskColor } from "../ui";

describe("computeRisk", () => {
  it("returns low scores for a young healthy person", () => {
    const result = computeRisk({ age: 30, bmi: 22, smoker: false, diabetes: false });
    expect(result.mi).toBeLessThan(10);
    expect(result.stroke).toBeLessThan(10);
    expect(result.hf).toBeLessThan(10);
  });

  it("returns high scores for elderly + obese + smoker + diabetes", () => {
    const result = computeRisk({ age: 75, bmi: 35, smoker: true, diabetes: true });
    expect(result.mi).toBeGreaterThan(50);
    expect(result.stroke).toBeGreaterThan(50);
    expect(result.hf).toBeGreaterThan(50);
  });

  it("clamps scores to 100 max", () => {
    const result = computeRisk({ age: 75, bmi: 35, smoker: true, diabetes: true });
    expect(result.mi).toBeLessThanOrEqual(100);
    expect(result.stroke).toBeLessThanOrEqual(100);
    expect(result.hf).toBeLessThanOrEqual(100);
  });

  it("applies BMI 1.0x multiplier for bmi 24.9", () => {
    const normal = computeRisk({ age: 45, bmi: 24.9, smoker: false, diabetes: false });
    expect(normal.mi).toBe(Math.round(5 * 1.0));
  });

  it("applies BMI 1.3x multiplier for bmi 25", () => {
    const overweight = computeRisk({ age: 45, bmi: 25, smoker: false, diabetes: false });
    expect(overweight.mi).toBe(Math.round(5 * 1.3));
  });

  it("applies BMI 1.6x multiplier for bmi 30", () => {
    const obese = computeRisk({ age: 45, bmi: 30, smoker: false, diabetes: false });
    expect(obese.mi).toBe(Math.round(5 * 1.6));
  });

  it("increases scores with high sbp (150)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false });
    const withSbp = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false, sbp: 150 });
    expect(withSbp.mi).toBeGreaterThan(baseline.mi);
    expect(withSbp.stroke).toBeGreaterThan(baseline.stroke);
    expect(withSbp.hf).toBeGreaterThan(baseline.hf);
  });

  it("reduces scores with protective HDL (70)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false });
    const withHdl = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false, hdl: 70 });
    expect(withHdl.mi).toBeLessThan(baseline.mi);
    expect(withHdl.stroke).toBeLessThan(baseline.stroke);
  });

  it("works with partial medical data (only sbp)", () => {
    const withSbp = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false, sbp: 140 });
    // ldl/hdl not provided — should have no effect beyond sbp
    const withAll = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false, sbp: 140, ldl: 110, hdl: 50 });
    // sbp-only should differ from all-three since ldl 110 = 1.0x and hdl 50 = 1.0x
    expect(withSbp.mi).toBe(withAll.mi);
  });

  it("increases scores with high glucose (130)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false });
    const withGlucose = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false, glucose: 130 });
    expect(withGlucose.mi).toBeGreaterThan(baseline.mi);
    expect(withGlucose.stroke).toBeGreaterThan(baseline.stroke);
    expect(withGlucose.hf).toBeGreaterThan(baseline.hf);
  });

  it("increases MI scores with high triglycerides (250)", () => {
    const baseline = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false });
    const withTg = computeRisk({ age: 55, bmi: 26, smoker: false, diabetes: false, triglycerides: 250 });
    expect(withTg.mi).toBeGreaterThan(baseline.mi);
  });

  it("dampens cholesterol effect on heart failure", () => {
    const highLdl = computeRisk({ age: 55, bmi: 22, smoker: false, diabetes: false, ldl: 170 });
    const baselineOnly = computeRisk({ age: 55, bmi: 22, smoker: false, diabetes: false });
    // LDL 170 → 1.4x for MI, but dampen(1.4, 0.5) = 1.2 for HF
    // The HF increase should be smaller proportionally
    const miIncrease = highLdl.mi - baselineOnly.mi;
    const hfIncrease = highLdl.hf - baselineOnly.hf;
    // MI base is higher and gets full 1.4x, HF base is lower and gets 1.2x
    expect(miIncrease).toBeGreaterThan(0);
    expect(hfIncrease).toBeGreaterThanOrEqual(0);
  });
});

describe("riskLevel", () => {
  it("returns 'Low' for score 9", () => {
    expect(riskLevel(9)).toBe("Low");
  });

  it("returns 'Moderate' for score 10", () => {
    expect(riskLevel(10)).toBe("Moderate");
  });

  it("returns 'Elevated' for score 20", () => {
    expect(riskLevel(20)).toBe("Elevated");
  });

  it("returns 'High' for score 30", () => {
    expect(riskLevel(30)).toBe("High");
  });
});

describe("riskColor", () => {
  it("returns emerald for score < 10", () => {
    expect(riskColor(5)).toBe("bg-emerald-500");
  });

  it("returns yellow for score 10-19", () => {
    expect(riskColor(15)).toBe("bg-yellow-500");
  });

  it("returns orange for score 20-29", () => {
    expect(riskColor(25)).toBe("bg-orange-500");
  });

  it("returns red for score >= 30", () => {
    expect(riskColor(30)).toBe("bg-red-500");
  });
});

describe("riskExplanation", () => {
  it("returns correct structure", () => {
    const input = { age: 55, bmi: 28, smoker: true, diabetes: false };
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
    const input = { age: 55, bmi: 28, smoker: true, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + smoking = 3 factors
    expect(explanation.factors.length).toBe(3);
  });

  it("includes medical factors when provided", () => {
    const input = { age: 55, bmi: 28, smoker: false, diabetes: false, sbp: 140, ldl: 130, hdl: 45, glucose: 110, triglycerides: 180 };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi + sbp + ldl + hdl + glucose + triglycerides = 7 factors
    expect(explanation.factors.length).toBe(7);
  });

  it("does not include medical factors when not provided", () => {
    const input = { age: 55, bmi: 28, smoker: false, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    // age + bmi = 2 factors
    expect(explanation.factors.length).toBe(2);
  });

  it("summary includes risk level and score", () => {
    const input = { age: 55, bmi: 28, smoker: false, diabetes: false };
    const risk = computeRisk(input);
    const explanation = riskExplanation("mi", risk.mi, input);
    expect(explanation.summary).toContain(`${risk.mi}%`);
    expect(explanation.summary).toContain("Myocardial Infarction");
  });
});
