import { describe, it, expect, vi, afterEach } from "vitest";
import { calculateAge, calculateBmi } from "../health";

describe("calculateAge", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("returns correct age when birthday has passed this year", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2025, 5, 15)); // June 15, 2025
    expect(calculateAge(new Date(1990, 2, 10))).toBe(35); // born Mar 10, 1990
  });

  it("returns correct age when birthday has not yet passed this year", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2025, 1, 15)); // Feb 15, 2025
    expect(calculateAge(new Date(1990, 5, 10))).toBe(34); // born Jun 10, 1990
  });
});

describe("calculateBmi", () => {
  it("returns correct BMI for 70kg / 175cm", () => {
    const bmi = calculateBmi(70, 175);
    expect(bmi).toBeCloseTo(22.86, 1);
  });
});
