export function calculateAge(birthdate: Date): number {
  const now = new Date();
  return (
    now.getFullYear() -
    birthdate.getFullYear() -
    (now <
    new Date(now.getFullYear(), birthdate.getMonth(), birthdate.getDate())
      ? 1
      : 0)
  );
}

export function calculateBmi(weightKg: number, heightCm: number): number {
  return weightKg / (heightCm / 100) ** 2;
}
