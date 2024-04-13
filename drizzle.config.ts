import type { Config } from "drizzle-kit";

export default {
  schema: "./app/schema.ts",
  out: "./app/drizzle",
} satisfies Config;