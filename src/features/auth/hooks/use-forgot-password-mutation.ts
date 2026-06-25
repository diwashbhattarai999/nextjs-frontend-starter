import { useMutation } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";
import { toast } from "sonner";

import { MUTATION_KEYS } from "@/configs/mutation-keys";
import { ROUTES } from "@/configs/routes";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import type { ForgotPasswordFormValues } from "@/features/auth/schemas/forgot-password.schema";
import { useRouter } from "@/i18n/navigation";
import { handleApiError } from "@/lib/handle-error";
import { forgotPassword } from "@/services/auth/auth.api";
import type { ForgotPasswordResponse } from "@/types/api/auth.types";

interface UseForgotPasswordMutationOptions {
    form?: UseFormReturn<ForgotPasswordFormValues>;
}

/**
 * Mutation hook for requesting a password reset link.
 *
 * @param options - Optional form instance for field-level API errors.
 */
export function useForgotPasswordMutation({ form }: UseForgotPasswordMutationOptions) {
    const router = useRouter();
    const auth = useAuthTranslations();

    return useMutation<ForgotPasswordResponse, Error, ForgotPasswordFormValues>({
        mutationKey: MUTATION_KEYS.auth.forgotPassword,
        mutationFn: forgotPassword,
        onSuccess: () => {
            toast.success(auth.forgotPassword.success);
            router.push(ROUTES.AUTH.LOGIN);
        },
        onError: (error) => {
            handleApiError({
                error,
                form,
                fallbackMessage: auth.forgotPassword.error,
            });
        },
    });
}
