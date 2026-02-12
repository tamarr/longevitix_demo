import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.user.prisma",
  migrations: {
    path: "prisma/migrations/user",
  },
  engine: "classic",
  datasource: {
    url: env("USER_DATABASE_URL"),
  },
});
