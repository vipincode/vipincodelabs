import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    PAYLOAD_SECRET: z.string().min(10),
    DATABASE_URL: z.string().url(),

    ADMIN_NAME: z.string(),
    ADMIN_EMAIL: z.string().email(),
    ADMIN_PASSWORD: z.string().min(6),
  },

  client: {
    // Over client only add these type of env, bcs these are exposed over browser
    // NEXT_PUBLIC_APP_URL: z.string().url(),
    // NEXT_PUBLIC_STRIPE_PUBLIC_KEY: z.string(),
  },

  runtimeEnv: {
    PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    ADMIN_NAME: process.env.ADMIN_NAME,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  },
});
