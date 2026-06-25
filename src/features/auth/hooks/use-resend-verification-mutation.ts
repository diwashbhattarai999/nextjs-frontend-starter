import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { MUTATION_KEYS } from "@/configs/mutation-keys";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import { handleApiError } from "@/lib/handle-error";
import { resendVerificationEmail } from "@/services/auth/auth.api";
import type { ResendVerificationResponse } from "@/types/api/auth.types";

/**
 * Mutation hook for requesting a new verification email.
 */
export function useResendVerificationMutation() {
    const auth = useAuthTranslations();

    return useMutation<ResendVerificationResponse, Error, { email: string }>({
        mutationKey: MUTATION_KEYS.auth.resendVerification,
        mutationFn: resendVerificationEmail,
        onSuccess: () => {
            toast.success(auth.verifyEmail.success);
        },
        onError: (error) => {
            handleApiError({
                error,
                fallbackMessage: auth.verifyEmail.error,
            });
        },
    });
}
