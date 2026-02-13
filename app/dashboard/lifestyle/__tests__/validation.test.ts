import { describe, it, expect } from "vitest";
import { validateLifestyle } from "../validation";

describe("validateLifestyle", () => {
  it("accepts restingHr only", () => {
    const result = validateLifestyle({ restingHr: "68", vo2max: "", activeMinutes: "" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.restingHr).toBe(68);
      expect(result.data.vo2max).toBeUndefined();
      expect(result.data.activeMinutes).toBeUndefined();
    }
  });

  it("accepts all fields", () => {
    const result = validateLifestyle({ restingHr: "65", vo2max: "40", activeMinutes: "200" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.restingHr).toBe(65);
      expect(result.data.vo2max).toBe(40);
      expect(result.data.activeMinutes).toBe(200);
    }
  });

  it("rejects when no fields provided", () => {
    const result = validateLifestyle({ restingHr: "", vo2max: "", activeMinutes: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("at least one");
    }
  });

  it("rejects restingHr out of range (too low)", () => {
    const result = validateLifestyle({ restingHr: "20", vo2max: "", activeMinutes: "" });
    expect(result.success).toBe(false);
  });

  it("rejects restingHr out of range (too high)", () => {
    const result = validateLifestyle({ restingHr: "250", vo2max: "", activeMinutes: "" });
    expect(result.success).toBe(false);
  });

  it("rejects vo2max out of range", () => {
    const result = validateLifestyle({ restingHr: "", vo2max: "5", activeMinutes: "" });
    expect(result.success).toBe(false);
  });

  it("rejects activeMinutes out of range", () => {
    const result = validateLifestyle({ restingHr: "", vo2max: "", activeMinutes: "3000" });
    expect(result.success).toBe(false);
  });

  it("accepts minimum valid values", () => {
    const result = validateLifestyle({ restingHr: "30", vo2max: "10", activeMinutes: "0" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.restingHr).toBe(30);
      expect(result.data.vo2max).toBe(10);
      expect(result.data.activeMinutes).toBe(0);
    }
  });

  it("accepts maximum valid values", () => {
    const result = validateLifestyle({ restingHr: "220", vo2max: "90", activeMinutes: "2520" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.restingHr).toBe(220);
      expect(result.data.vo2max).toBe(90);
      expect(result.data.activeMinutes).toBe(2520);
    }
  });

  it("accepts vo2max only", () => {
    const result = validateLifestyle({ restingHr: "", vo2max: "35.5", activeMinutes: "", sleepHours: "" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.vo2max).toBe(35.5);
    }
  });

  it("accepts sleepHours only", () => {
    const result = validateLifestyle({ restingHr: "", vo2max: "", activeMinutes: "", sleepHours: "7.5" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.sleepHours).toBe(7.5);
    }
  });

  it("rejects sleepHours out of range", () => {
    const result = validateLifestyle({ restingHr: "", vo2max: "", activeMinutes: "", sleepHours: "20" });
    expect(result.success).toBe(false);
  });

  it("accepts all fields including wearable data", () => {
    const result = validateLifestyle({
      restingHr: "65", vo2max: "40", activeMinutes: "200",
      sleepHours: "8",
    });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.sleepHours).toBe(8);
    }
  });

  it("still rejects when all fields are empty", () => {
    const result = validateLifestyle({ restingHr: "", vo2max: "", activeMinutes: "", sleepHours: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0].message).toContain("at least one");
    }
  });
});
