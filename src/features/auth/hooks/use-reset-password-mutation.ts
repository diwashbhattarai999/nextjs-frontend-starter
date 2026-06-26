import { useMutation } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import { MUTATION_KEYS } from "@/configs/mutation-keys";
import { ROUTES } from "@/configs/routes";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import type {
    ResetPasswordFormValues,
    ResetPasswordPayload,
} from "@/features/auth/schemas/reset-password.schema";
import { useRouter } from "@/i18n/navigation";
import { handleApiError } from "@/lib/handle-error";
import { resetPassword } from "@/services/auth/auth.api";
import type { ResetPasswordResponse } from "@/types/api/auth.types";

interface UseResetPasswordMutationOptions {
    form?: UseFormReturn<ResetPasswordFormValues>;
}

/**
 * Mutation hook for resetting the user's password.
 *
 * @param options - Optional form instance for field-level API errors.
 */
export function useResetPasswordMutation({ form }: UseResetPasswordMutationOptions) {
    const router = useRouter();
    const auth = useAuthTranslations();

    return useMutation<ResetPasswordResponse, Error, ResetPasswordPayload>({
        mutationKey: MUTATION_KEYS.auth.resetPassword,
        mutationFn: resetPassword,
        onSuccess: () => {
            toast.success(auth.resetPassword.success);
            router.push(ROUTES.AUTH.LOGIN);
        },
        onError: (error) => {
            handleApiError({
                error,
                form,
                fallbackMessage: auth.resetPassword.error,
            });
        },
    });
}
