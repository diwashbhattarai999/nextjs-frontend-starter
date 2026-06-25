"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

import { PageDescription, PageFooter, PageHeader, PageTitle } from "@/components/shared/page";
import { SubmitButton } from "@/components/shared/submit-button";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/configs/routes";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import { useForgotPasswordMutation } from "@/features/auth/hooks/use-forgot-password-mutation";
import {
    createForgotPasswordSchema,
    type ForgotPasswordFormValues,
} from "@/features/auth/schemas/forgot-password.schema";
import { useCommonTranslations } from "@/hooks/use-common-translations";
import { Link } from "@/i18n/navigation";

export function ForgotPasswordForm() {
    const auth = useAuthTranslations();
    const { validation } = useCommonTranslations();

    const forgotPasswordSchema = useMemo(
        () =>
            createForgotPasswordSchema({
                email: { invalid: validation.emailInvalid },
            }),
        [validation.emailInvalid]
    );

    const form = useForm<ForgotPasswordFormValues>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        },
        mode: "onChange",
    });

    const forgotPasswordMutation = useForgotPasswordMutation({ form });

    const onSubmit = form.handleSubmit((values) => {
        forgotPasswordMutation.mutate(values);
    });

    return (
        <form className="flex w-full flex-col gap-8" noValidate onSubmit={onSubmit}>
            <PageHeader className="gap-3">
                <PageTitle className="text-4xl">{auth.forgotPassword.title}</PageTitle>
                <PageDescription className="text-base">
                    {auth.forgotPassword.description}
                </PageDescription>
            </PageHeader>

            <FieldGroup>
                <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="forgot-password-email">
                                {auth.forgotPassword.email}
                            </FieldLabel>
                            <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="email"
                                id="forgot-password-email"
                                placeholder={auth.forgotPassword.emailPlaceholder}
                                type="email"
                            />
                            <FieldError errors={[fieldState.error]} />
                        </Field>
                    )}
                />

                <SubmitButton
                    className="w-full"
                    isPending={forgotPasswordMutation.isPending}
                    label={auth.forgotPassword.submit}
                    pendingLabel={auth.forgotPassword.submitting}
                    size="xl"
                />
            </FieldGroup>

            <PageFooter className="mt-0 border-0 pt-0 text-center">
                <p className="text-muted-foreground text-sm">
                    {auth.forgotPassword.rememberPassword}{" "}
                    <Link
                        className="font-medium text-primary hover:underline"
                        href={ROUTES.AUTH.LOGIN}
                    >
                        {auth.forgotPassword.signIn}
                    </Link>
                </p>
            </PageFooter>
        </form>
    );
}
