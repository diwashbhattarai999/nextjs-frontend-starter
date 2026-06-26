import { useMutation } from "@tanstack/react-query";

import { MUTATION_KEYS } from "@/configs/mutation-keys";
import { ROUTES } from "@/configs/routes";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import { useRouter } from "@/i18n/navigation";
import { handleApiError } from "@/lib/handle-error";
import { verifyEmail } from "@/services/auth/auth.api";
import type { VerifyEmailResponse } from "@/types/api/auth.types";

/**
 * Mutation hook for verifying the user's email.
 */
export function useVerifyEmailMutation() {
    const router = useRouter();
    const auth = useAuthTranslations();

    return useMutation<VerifyEmailResponse, Error, { token: string }>({
        mutationKey: MUTATION_KEYS.auth.verifyEmail,
        mutationFn: verifyEmail,
        onSuccess: () => {
            router.push(ROUTES.AUTH.EMAIL_VERIFICATION_SUCCESS);
        },
        onError: (error) => {
            handleApiError({
                error,
                fallbackMessage: auth.verifyEmail.error,
            });
        },
    });
}
