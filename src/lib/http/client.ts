import { STORAGE_KEYS } from "@/configs/storage";
import { env } from "@/env/client";
import { getCookie } from "@/lib/cookies";

import { createClient } from "./create-client";

interface SessionCookiePayload {
    accessToken?: string;
}

/**
 * Resolves the access token from the session cookie in the browser.
 *
 * @returns Access token when present in the session cookie.
 */
function resolveClientAccessToken(): string | undefined {
    const sessionRaw = getCookie(STORAGE_KEYS.SESSION);

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

/** Browser Axios client — reads the access token from the session cookie. */
export const api = createClient({
    baseURL: `${env.NEXT_PUBLIC_API_URL}/api`,
    timeout: env.NEXT_PUBLIC_API_TIMEOUT,
    resolveToken: resolveClientAccessToken,
});
