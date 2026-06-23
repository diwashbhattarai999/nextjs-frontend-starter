import axios, { type AxiosError, type AxiosInstance, type CreateAxiosDefaults } from "axios";

const DEFAULT_HEADERS = {
    "Content-Type": "application/json",
    Accept: "application/json",
} as const;

type TokenResolver = () => string | undefined | Promise<string | undefined>;

interface CreateClientOptions {
    baseURL: string;
    timeout: number;
    resolveToken: TokenResolver;
    axiosDefaults?: Omit<CreateAxiosDefaults, "baseURL" | "timeout">;
}

/**
 * Creates an Axios instance that attaches `Authorization: Bearer <token>`
 * when a token resolver returns a value.
 *
 * @param options - Client configuration and auth/error handlers.
 * @returns Configured Axios instance.
 */
export function createClient({
    baseURL,
    timeout,
    resolveToken,
    axiosDefaults,
}: CreateClientOptions): AxiosInstance {
    const client = axios.create({
        ...axiosDefaults,
        baseURL,
        timeout,
        headers: {
            ...DEFAULT_HEADERS,
            ...axiosDefaults?.headers,
        },
    });

    client.interceptors.request.use(async (config) => {
        const token = await resolveToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    });

    client.interceptors.response.use(
        (response) => response,
        (error: AxiosError) => {
            const status = error.response?.status;

            if (status === 401) {
                // TODO: Handle unauthorized error
            }

            if (status === 403) {
                // TODO: Handle forbidden error
            }

            return Promise.reject(error);
        }
    );

    return client;
}
