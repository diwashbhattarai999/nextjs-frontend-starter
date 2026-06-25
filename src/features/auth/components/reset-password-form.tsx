"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

import { PageDescription, PageFooter, PageHeader, PageTitle } from "@/components/shared/page";
import { PasswordInput } from "@/components/shared/password-input";
import { SubmitButton } from "@/components/shared/submit-button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { ROUTES } from "@/configs/routes";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import { useResetPasswordMutation } from "@/features/auth/hooks/use-reset-password-mutation";
import {
    createResetPasswordSchema,
    type ResetPasswordFormValues,
} from "@/features/auth/schemas/reset-password.schema";
import { useCommonTranslations } from "@/hooks/use-common-translations";
import { Link } from "@/i18n/navigation";

export function ResetPasswordForm() {
    const auth = useAuthTranslations();
    const { validation } = useCommonTranslations();
    const searchParams = useSearchParams();
    const token = searchParams.get("token") ?? "";

    const resetPasswordSchema = useMemo(
        () =>
            createResetPasswordSchema({
                password: {
                    required: validation.passwordRequired,
                    min: validation.passwordMin,
                    max: validation.passwordMax,
                },
                confirmPassword: {
                    required: validation.confirmPasswordRequired,
                    mismatch: validation.passwordMismatch,
                },
            }),
        [
            validation.confirmPasswordRequired,
            validation.passwordMax,
            validation.passwordMin,
            validation.passwordMismatch,
            validation.passwordRequired,
        ]
    );

    const form = useForm<ResetPasswordFormValues>({
        resolver: zodResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
        mode: "onChange",
    });

    const resetPasswordMutation = useResetPasswordMutation({ form });

    const onSubmit = form.handleSubmit((values) => {
        resetPasswordMutation.mutate({
            password: values.password,
            token,
        });
    });

    return (
        <form className="flex w-full flex-col gap-8" noValidate onSubmit={onSubmit}>
            <PageHeader className="gap-3">
                <PageTitle className="text-4xl">{auth.resetPassword.title}</PageTitle>
                <PageDescription className="text-base">
                    {auth.resetPassword.description}
                </PageDescription>
            </PageHeader>

            <FieldGroup>
                <Controller
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="reset-password">
                                {auth.resetPassword.password}
                            </FieldLabel>
                            <PasswordInput
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="new-password"
                                id="reset-password"
                                placeholder={auth.resetPassword.passwordPlaceholder}
                            />
                            <FieldError errors={[fieldState.error]} />
                        </Field>
                    )}
                />

                <Controller
                    control={form.control}
                    name="confirmPassword"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="reset-confirm-password">
                                {auth.resetPassword.confirmPassword}
                            </FieldLabel>
                            <PasswordInput
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="new-password"
                                id="reset-confirm-password"
                                placeholder={auth.resetPassword.confirmPasswordPlaceholder}
                            />
                            <FieldError errors={[fieldState.error]} />
                        </Field>
                    )}
                />

                <SubmitButton
                    className="w-full"
                    isPending={resetPasswordMutation.isPending}
                    label={auth.resetPassword.submit}
                    pendingLabel={auth.resetPassword.submitting}
                    size="xl"
                />
            </FieldGroup>

            <PageFooter className="mt-0 border-0 pt-0 text-center">
                <p className="text-muted-foreground text-sm">
                    <Link
                        className="font-medium text-primary hover:underline"
                        href={ROUTES.AUTH.LOGIN}
                    >
                        {auth.resetPassword.backToLogin}
                    </Link>
                </p>
            </PageFooter>
        </form>
    );
}
