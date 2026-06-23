import "server-only";

import { cookies } from "next/headers";

import { STORAGE_KEYS } from "@/configs/storage";
import { env } from "@/env/server";

import { createClient } from "./create-client";

interface SessionCookiePayload {
    accessToken?: string;
}

/**
 * Resolves the access token from the session cookie on the server.
 *
 * @returns Access token when present in the session cookie.
 */
async function resolveServerAccessToken(): Promise<string | undefined> {
    const cookieStore = await cookies();
    const sessionRaw = cookieStore.get(STORAGE_KEYS.SESSION)?.value;

    if (!sessionRaw) {
        return undefined;
    }

    try {
        const session = JSON.parse(sessionRaw) as SessionCookiePayload;
        return session.accessToken;
    } catch {
        return undefined;
    }
}

/**
 * Server Axios client — reads the access token from the session cookie via `next/headers`.
 * Only import from Server Components, Server Actions, or route handlers.
 */
export const apiServer = createClient({
    baseURL: `${env.API_URL}/api`,
    timeout: env.API_TIMEOUT,
    resolveToken: resolveServerAccessToken,
});
