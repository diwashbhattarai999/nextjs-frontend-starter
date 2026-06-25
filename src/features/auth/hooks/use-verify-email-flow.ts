import { useCallback, useEffect, useState } from "react";

import { useResendVerificationMutation } from "@/features/auth/hooks/use-resend-verification-mutation";
import { useVerifyEmailMutation } from "@/features/auth/hooks/use-verify-email-mutation";
import { useVerificationCooldownStore } from "@/features/auth/stores/use-verification-cooldown-store";

const RESEND_COOLDOWN_SECONDS = 30;

interface UseVerifyEmailFlowOptions {
    token: string;
    email: string;
}

export function useVerifyEmailFlow({ token, email }: UseVerifyEmailFlowOptions) {
    const verifyMutation = useVerifyEmailMutation();
    const resendMutation = useResendVerificationMutation();

    const [hasAttemptedVerification, setHasAttemptedVerification] = useState(false);
    const [isCooldownStoreReady, setIsCooldownStoreReady] = useState(false);
    const [cooldown, setCooldownState] = useState(0);

    const { clearCooldown, getRemainingCooldown, setCooldown } = useVerificationCooldownStore();
    const storedToken = useVerificationCooldownStore(
        (state) => state.entries[email || "default"]?.token
    );
    const expiry = useVerificationCooldownStore(
        (state) => state.entries[email || "default"]?.expiresAt
    );

    useEffect(() => {
        setIsCooldownStoreReady(useVerificationCooldownStore.persist.hasHydrated());

        return useVerificationCooldownStore.persist.onFinishHydration(() => {
            setIsCooldownStoreReady(true);
        });
    }, []);

    useEffect(() => {
        if (storedToken && storedToken !== token) {
            clearCooldown(email);
        }
    }, [clearCooldown, email, storedToken, token]);

    useEffect(() => {
        if (!(isCooldownStoreReady && token)) {
            return;
        }

        if (getRemainingCooldown(email, token) > 0) {
            setHasAttemptedVerification(true);
            return;
        }

        if (!hasAttemptedVerification) {
            setHasAttemptedVerification(true);
            verifyMutation.mutate({ token });
        }
    }, [
        email,
        token,
        hasAttemptedVerification,
        isCooldownStoreReady,
        getRemainingCooldown,
        verifyMutation,
    ]);

    useEffect(() => {
        if (!expiry) {
            setCooldownState(0);
            return;
        }

        const updateCooldown = () => {
            const remaining = Math.max(0, Math.ceil((expiry - Date.now()) / 1000));
            setCooldownState(remaining);
            return remaining;
        };

        const remaining = updateCooldown();
        if (remaining <= 0) {
            return;
        }

        const timer = setInterval(() => {
            const currentRemaining = updateCooldown();
            if (currentRemaining <= 0) {
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [expiry]);

    const handleResend = useCallback(() => {
        if (cooldown > 0) {
            return;
        }

        resendMutation.mutate(
            { email },
            {
                onSuccess: () => {
                    setCooldown(email, token, RESEND_COOLDOWN_SECONDS);
                },
            }
        );
    }, [cooldown, email, resendMutation, setCooldown, token]);

    return {
        cooldown,
        handleResend,
        hasActiveCooldown: isCooldownStoreReady && cooldown > 0,
        isCooldownStoreReady,
        resendMutation,
        verifyMutation,
    };
}
