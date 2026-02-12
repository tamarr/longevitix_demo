import { PrismaClient as PiiPrismaClient } from "@/prisma/generated/pii-client";
import { PrismaClient as HealthPrismaClient } from "@/prisma/generated/health-client";

const globalForPrisma = globalThis as unknown as {
  piiPrisma: PiiPrismaClient | undefined;
  healthPrisma: HealthPrismaClient | undefined;
};

export const piiPrisma = globalForPrisma.piiPrisma ?? new PiiPrismaClient();
export const healthPrisma =
  globalForPrisma.healthPrisma ?? new HealthPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.piiPrisma = piiPrisma;
  globalForPrisma.healthPrisma = healthPrisma;
}
