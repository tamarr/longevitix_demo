import { describe, it, expect } from "vitest";
import { validateBaseline } from "../validation";

describe("validateBaseline", () => {
  const validData = {
    birthdate: "1990-06-15",
    sex: "male",
    height: "175",
    weight: "70",
    smoker: null,
    diabetes: null,
  };

  it("accepts valid complete data", () => {
    const result = validateBaseline(validData);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.height).toBe(175);
      expect(result.data.weight).toBe(70);
      expect(result.data.smoker).toBe(false);
      expect(result.data.diabetes).toBe(false);
    }
  });

  it("rejects missing birthdate", () => {
    const result = validateBaseline({ ...validData, birthdate: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Date of birth is required.");
    }
  });

  it("rejects height out of range (too low)", () => {
    const result = validateBaseline({ ...validData, height: "50" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Height must be between 100-250 cm.");
    }
  });

  it("rejects height out of range (too high)", () => {
    const result = validateBaseline({ ...validData, height: "300" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Height must be between 100-250 cm.");
    }
  });

  it("rejects underage birthdate", () => {
    const thisYear = new Date().getFullYear();
    const result = validateBaseline({
      ...validData,
      birthdate: `${thisYear - 10}-01-01`,
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toBe("Age must be between 18 and 120.");
    }
  });

  it("accepts valid edge case (exactly 18, height 100, weight 30)", () => {
    const thisYear = new Date().getFullYear();
    const result = validateBaseline({
      birthdate: `${thisYear - 18}-01-01`,
      sex: "female",
      height: "100",
      weight: "30",
      smoker: "on",
      diabetes: "on",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.smoker).toBe(true);
      expect(result.data.diabetes).toBe(true);
    }
  });
});
