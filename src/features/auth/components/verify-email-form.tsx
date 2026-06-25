"use client";

import { Icons } from "@/components/shared/icons";
import { PageDescription, PageFooter, PageHeader, PageTitle } from "@/components/shared/page";
import { SubmitButton } from "@/components/shared/submit-button";
import { Spinner } from "@/components/ui/spinner";
import { ROUTES } from "@/configs/routes";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import { useVerifyEmailFlow } from "@/features/auth/hooks/use-verify-email-flow";
import { Link } from "@/i18n/navigation";

interface VerifyEmailFormProps {
    token: string;
    email: string;
}

export function VerifyEmailForm({ token, email }: VerifyEmailFormProps) {
    const auth = useAuthTranslations();
    const {
        cooldown,
        handleResend,
        hasActiveCooldown,
        isCooldownStoreReady,
        resendMutation,
        verifyMutation,
    } = useVerifyEmailFlow({ email, token });

    // If a token is present, we are in the verification flow
    if (!isCooldownStoreReady) return null;

    const shouldShowErrorState = verifyMutation.isError || hasActiveCooldown;

    // 1. Failed Verification State (Error Icon + Message + Resend Button)
    if (shouldShowErrorState) {
        const errorMessage =
            verifyMutation.error instanceof Error
                ? verifyMutation.error.message
                : auth.verifyEmail.error;

        return (
            <div className="flex w-full flex-col gap-8">
                <PageHeader className="items-center gap-4 text-center">
                    <Icons.alertTriangle className="size-12 text-destructive" />
                    <PageTitle className="text-4xl text-destructive">Verification Failed</PageTitle>
                    <PageDescription className="max-w-sm text-base">{errorMessage}</PageDescription>
                </PageHeader>

                <div className="flex flex-col gap-4">
                    <SubmitButton
                        className="w-full"
                        disabled={cooldown > 0}
                        isPending={resendMutation.isPending}
                        label={
                            cooldown > 0
                                ? `${auth.verifyEmail.resendButton} (${cooldown}s)`
                                : auth.verifyEmail.resendButton
                        }
                        onClick={handleResend}
                        pendingLabel={auth.verifyEmail.resending}
                        size="xl"
                    />
                </div>

                <PageFooter className="mt-0 border-0 pt-0 text-center">
                    <p className="text-muted-foreground text-sm">
                        <Link
                            className="font-medium text-primary hover:underline"
                            href={ROUTES.AUTH.LOGIN}
                        >
                            {auth.verifyEmail.backToLogin}
                        </Link>
                    </p>
                </PageFooter>
            </div>
        );
    }

    // 2. Verifying State (Spinner + Text) - shown during verification or successful redirection
    return (
        <div className="flex w-full flex-col items-center justify-center gap-6 py-8 text-center">
            <Spinner className="size-10 text-primary" />
            <div className="flex flex-col gap-2">
                <PageTitle className="text-2xl">Verifying your email</PageTitle>
                <PageDescription className="text-sm">
                    Please wait while we confirm your email address...
                </PageDescription>
            </div>
        </div>
    );
}
