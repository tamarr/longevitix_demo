import { describe, it, expect } from "vitest";
import { computeRisk, riskLevel, riskColor } from "../risk";

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
