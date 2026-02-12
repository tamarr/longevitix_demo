import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.health.prisma",
  migrations: {
    path: "prisma/migrations/health",
  },
  engine: "classic",
  datasource: {
    url: env("HEALTH_DATABASE_URL"),
  },
});
