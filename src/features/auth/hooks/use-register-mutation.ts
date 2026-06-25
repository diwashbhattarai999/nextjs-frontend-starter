import { useMutation } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import { MUTATION_KEYS } from "@/configs/mutation-keys";
import { ROUTES } from "@/configs/routes";
import { STORAGE_KEYS } from "@/configs/storage";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import type { RegisterFormValues, RegisterPayload } from "@/features/auth/schemas/register.schema";
import { useRouter } from "@/i18n/navigation";
import { setCookie } from "@/lib/cookies";
import { handleApiError } from "@/lib/handle-error";
import { register } from "@/services/auth/auth.api";
import type { RegisterResponse } from "@/types/api/auth.types";

interface UseRegisterMutationOptions {
    form?: UseFormReturn<RegisterFormValues>;
}

/**
 * Mutation hook for creating a new user account.
 *
 * @param options - Optional form instance for field-level API errors.
 */
export function useRegisterMutation({ form }: UseRegisterMutationOptions) {
    const router = useRouter();
    const auth = useAuthTranslations();

    return useMutation<RegisterResponse, Error, RegisterPayload>({
        mutationKey: MUTATION_KEYS.auth.register,
        mutationFn: register,
        onSuccess: (response) => {
            setCookie(
                STORAGE_KEYS.SESSION,
                JSON.stringify({
                    accessToken: response.data.accessToken,
                    refreshToken: response.data.refreshToken,
                    user: response.data.user,
                })
            );

            toast.success(auth.register.success);
            router.push(ROUTES.DASHBOARD.HOME);
        },
        onError: (error) => {
            handleApiError({
                error,
                form,
                fallbackMessage: auth.register.error,
            });
        },
    });
}
