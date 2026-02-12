import { describe, it, expect } from "vitest";
import { validateMedical } from "../validation";

describe("validateMedical", () => {
  it("accepts sbp only", () => {
    const result = validateMedical({ sbp: "120", ldl: "", hdl: "" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.sbp).toBe(120);
      expect(result.data.ldl).toBeUndefined();
      expect(result.data.hdl).toBeUndefined();
    }
  });

  it("accepts all three fields", () => {
    const result = validateMedical({ sbp: "130", ldl: "110", hdl: "55" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.sbp).toBe(130);
      expect(result.data.ldl).toBe(110);
      expect(result.data.hdl).toBe(55);
    }
  });

  it("rejects when no fields provided", () => {
    const result = validateMedical({ sbp: "", ldl: "", hdl: "", glucose: "", triglycerides: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("at least one");
    }
  });

  it("rejects sbp out of range (too low)", () => {
    const result = validateMedical({ sbp: "30", ldl: "", hdl: "" });
    expect(result.success).toBe(false);
  });

  it("rejects sbp out of range (too high)", () => {
    const result = validateMedical({ sbp: "300", ldl: "", hdl: "" });
    expect(result.success).toBe(false);
  });

  it("rejects ldl out of range", () => {
    const result = validateMedical({ sbp: "", ldl: "500", hdl: "" });
    expect(result.success).toBe(false);
  });

  it("rejects hdl out of range", () => {
    const result = validateMedical({ sbp: "", ldl: "", hdl: "5" });
    expect(result.success).toBe(false);
  });

  it("accepts minimum valid values", () => {
    const result = validateMedical({ sbp: "60", ldl: "20", hdl: "10" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.sbp).toBe(60);
      expect(result.data.ldl).toBe(20);
      expect(result.data.hdl).toBe(10);
    }
  });

  it("accepts maximum valid values", () => {
    const result = validateMedical({ sbp: "250", ldl: "400", hdl: "150", glucose: "", triglycerides: "" });
    expect(result.success).toBe(true);
  });

  it("accepts glucose only", () => {
    const result = validateMedical({ sbp: "", ldl: "", hdl: "", glucose: "95", triglycerides: "" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.glucose).toBe(95);
    }
  });

  it("accepts all five fields", () => {
    const result = validateMedical({ sbp: "130", ldl: "110", hdl: "55", glucose: "100", triglycerides: "150" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.sbp).toBe(130);
      expect(result.data.ldl).toBe(110);
      expect(result.data.hdl).toBe(55);
      expect(result.data.glucose).toBe(100);
      expect(result.data.triglycerides).toBe(150);
    }
  });

  it("rejects glucose out of range", () => {
    const result = validateMedical({ sbp: "", ldl: "", hdl: "", glucose: "10", triglycerides: "" });
    expect(result.success).toBe(false);
  });

  it("rejects triglycerides out of range", () => {
    const result = validateMedical({ sbp: "", ldl: "", hdl: "", glucose: "", triglycerides: "5000" });
    expect(result.success).toBe(false);
  });
});
