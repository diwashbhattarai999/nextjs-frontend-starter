import { useMutation } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import { MUTATION_KEYS } from "@/configs/mutation-keys";
import { ROUTES } from "@/configs/routes";
import { STORAGE_KEYS } from "@/configs/storage";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import type { LoginFormValues } from "@/features/auth/schemas/login.schema";
import { useRouter } from "@/i18n/navigation";
import { setCookie } from "@/lib/cookies";
import { handleApiError } from "@/lib/handle-error";
import { login } from "@/services/auth/auth.api";
import type { LoginRequest, LoginResponse } from "@/types/api/auth.types";

interface UseLoginMutationOptions {
    form?: UseFormReturn<LoginFormValues>;
}

/**
 * Mutation hook for authenticating a user via email and password.
 *
 * @param options - Optional form instance for field-level API errors.
 */
export function useLoginMutation({ form }: UseLoginMutationOptions) {
    const router = useRouter();
    const auth = useAuthTranslations();

    return useMutation<LoginResponse, Error, LoginRequest>({
        mutationKey: [MUTATION_KEYS.auth.login],
        mutationFn: login,
        onSuccess: (data) => {
            setCookie(
                STORAGE_KEYS.SESSION,
                JSON.stringify({
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                    user: data.user,
                })
            );

            toast.success(auth.login.success);
            router.push(ROUTES.DASHBOARD.HOME);
        },
        onError: (error) => {
            handleApiError({
                error,
                form,
                fallbackMessage: auth.login.error,
            });
        },
    });
}
