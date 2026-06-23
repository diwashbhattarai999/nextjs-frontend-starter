import { createEnv } from "@t3-oss/env-nextjs";
import z from "zod";

export const env = createEnv({
    server: {
        APP_URL: z.string().min(1, "APP_URL is required"),
        API_URL: z.string().min(1, "API_URL is required"),
        API_TIMEOUT: z.coerce.number().default(15_000),
    },
    runtimeEnv: {
        APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        API_URL: process.env.NEXT_PUBLIC_API_URL,
        API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
    },
});
