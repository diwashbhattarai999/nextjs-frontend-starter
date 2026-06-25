"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

import { AppleIcon } from "@/components/icons/apple";
import { GoogleIcon } from "@/components/icons/google";
import { PageDescription, PageFooter, PageHeader, PageTitle } from "@/components/shared/page";
import { PasswordInput } from "@/components/shared/password-input";
import { SubmitButton } from "@/components/shared/submit-button";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSeparator } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/configs/routes";
import { useAuthTranslations } from "@/features/auth/hooks/use-auth-translations";
import { useLoginMutation } from "@/features/auth/hooks/use-login-mutation";
import { createLoginSchema, type LoginFormValues } from "@/features/auth/schemas/login.schema";
import { useComingSoonToast } from "@/hooks/use-coming-soon-toast";
import { useCommonTranslations } from "@/hooks/use-common-translations";
import { Link } from "@/i18n/navigation";

export function LoginForm() {
    const auth = useAuthTranslations();
    const { validation } = useCommonTranslations();

    const loginSchema = useMemo(
        () =>
            createLoginSchema({
                email: { invalid: validation.emailInvalid },
                password: {
                    required: validation.passwordRequired,
                    min: validation.passwordMin,
                    max: validation.passwordMax,
                },
            }),
        [
            validation.emailInvalid,
            validation.passwordMax,
            validation.passwordMin,
            validation.passwordRequired,
        ]
    );

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onChange",
    });

    const loginMutation = useLoginMutation({ form });
    const showComingSoonToast = useComingSoonToast();

    const handleSocialLogin = () => {
        showComingSoonToast({
            title: auth.login.socialComingSoon,
        });
    };

    const onSubmit = form.handleSubmit((values) => {
        loginMutation.mutate(values);
    });

    return (
        <form className="flex w-full flex-col gap-8" noValidate onSubmit={onSubmit}>
            <PageHeader className="gap-3">
                <PageTitle className="text-4xl">{auth.login.title}</PageTitle>
                <PageDescription className="text-base">{auth.login.description}</PageDescription>
            </PageHeader>

            <FieldGroup>
                <div className="grid gap-3">
                    <Button
                        className="w-full"
                        onClick={handleSocialLogin}
                        type="button"
                        variant="outline"
                    >
                        <GoogleIcon aria-hidden />
                        {auth.login.google}
                    </Button>
                    <Button
                        className="w-full"
                        onClick={handleSocialLogin}
                        type="button"
                        variant="outline"
                    >
                        <AppleIcon aria-hidden />
                        {auth.login.apple}
                    </Button>
                </div>

                <FieldSeparator>{auth.login.divider}</FieldSeparator>

                <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="login-email">{auth.login.email}</FieldLabel>
                            <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="email"
                                id="login-email"
                                placeholder={auth.login.emailPlaceholder}
                                type="email"
                            />
                            <FieldError errors={[fieldState.error]} />
                        </Field>
                    )}
                />

                <Controller
                    control={form.control}
                    name="password"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <div className="flex items-center justify-between gap-3">
                                <FieldLabel htmlFor="login-password">
                                    {auth.login.password}
                                </FieldLabel>
                                <Link
                                    className="text-primary text-sm hover:underline"
                                    href={ROUTES.AUTH.FORGOT_PASSWORD}
                                >
                                    {auth.login.forgotPassword}
                                </Link>
                            </div>
                            <PasswordInput
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="current-password"
                                id="login-password"
                                placeholder={auth.login.passwordPlaceholder}
                            />
                            <FieldError errors={[fieldState.error]} />
                        </Field>
                    )}
                />

                <SubmitButton
                    className="w-full"
                    isPending={loginMutation.isPending}
                    label={auth.login.submit}
                    pendingLabel={auth.login.submitting}
                    size="xl"
                />
            </FieldGroup>

            <PageFooter className="mt-0 border-0 pt-0 text-center">
                <p className="text-muted-foreground text-sm">
                    {auth.login.noAccount}{" "}
                    <Link
                        className="font-medium text-primary hover:underline"
                        href={ROUTES.AUTH.REGISTER}
                    >
                        {auth.login.signUp}
                    </Link>
                </p>
                <p className="mt-3 text-muted-foreground text-xs">{auth.login.demoHint}</p>
            </PageFooter>
        </form>
    );
}
