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
import { useRegisterMutation } from "@/features/auth/hooks/use-register-mutation";
import {
    createRegisterSchema,
    type RegisterFormValues,
} from "@/features/auth/schemas/register.schema";
import { useComingSoonToast } from "@/hooks/use-coming-soon-toast";
import { useCommonTranslations } from "@/hooks/use-common-translations";
import { Link } from "@/i18n/navigation";

export function RegisterForm() {
    const auth = useAuthTranslations();
    const { validation } = useCommonTranslations();

    const registerSchema = useMemo(
        () =>
            createRegisterSchema({
                name: {
                    required: validation.nameRequired,
                    min: validation.nameMin,
                    max: validation.nameMax,
                },
                email: { invalid: validation.emailInvalid },
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
            validation.emailInvalid,
            validation.nameMax,
            validation.nameMin,
            validation.nameRequired,
            validation.passwordMax,
            validation.passwordMin,
            validation.passwordMismatch,
            validation.passwordRequired,
        ]
    );

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        mode: "onChange",
    });

    const registerMutation = useRegisterMutation({ form });
    const showComingSoonToast = useComingSoonToast();

    const handleSocialSignUp = () => {
        showComingSoonToast({
            title: auth.register.socialComingSoon,
        });
    };

    const onSubmit = form.handleSubmit((values) => {
        registerMutation.mutate({
            name: values.name,
            email: values.email,
            password: values.password,
        });
    });

    return (
        <form className="flex w-full flex-col gap-8" noValidate onSubmit={onSubmit}>
            <PageHeader className="gap-3">
                <PageTitle className="text-4xl">{auth.register.title}</PageTitle>
                <PageDescription className="text-base">{auth.register.description}</PageDescription>
            </PageHeader>

            <FieldGroup>
                <div className="grid gap-3">
                    <Button
                        className="w-full"
                        onClick={handleSocialSignUp}
                        type="button"
                        variant="outline"
                    >
                        <GoogleIcon aria-hidden />
                        {auth.register.google}
                    </Button>
                    <Button
                        className="w-full"
                        onClick={handleSocialSignUp}
                        type="button"
                        variant="outline"
                    >
                        <AppleIcon aria-hidden />
                        {auth.register.apple}
                    </Button>
                </div>

                <FieldSeparator>{auth.register.divider}</FieldSeparator>

                <Controller
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="register-name">{auth.register.name}</FieldLabel>
                            <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="name"
                                id="register-name"
                                placeholder={auth.register.namePlaceholder}
                            />
                            <FieldError errors={[fieldState.error]} />
                        </Field>
                    )}
                />

                <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                            <FieldLabel htmlFor="register-email">{auth.register.email}</FieldLabel>
                            <Input
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="email"
                                id="register-email"
                                placeholder={auth.register.emailPlaceholder}
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
                            <FieldLabel htmlFor="register-password">
                                {auth.register.password}
                            </FieldLabel>
                            <PasswordInput
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="new-password"
                                id="register-password"
                                placeholder={auth.register.passwordPlaceholder}
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
                            <FieldLabel htmlFor="register-confirm-password">
                                {auth.register.confirmPassword}
                            </FieldLabel>
                            <PasswordInput
                                {...field}
                                aria-invalid={fieldState.invalid}
                                autoComplete="new-password"
                                id="register-confirm-password"
                                placeholder={auth.register.confirmPasswordPlaceholder}
                            />
                            <FieldError errors={[fieldState.error]} />
                        </Field>
                    )}
                />

                <SubmitButton
                    className="w-full"
                    isPending={registerMutation.isPending}
                    label={auth.register.submit}
                    pendingLabel={auth.register.submitting}
                    size="xl"
                />
            </FieldGroup>

            <PageFooter className="mt-0 border-0 pt-0 text-center">
                <p className="text-muted-foreground text-sm">
                    {auth.register.hasAccount}{" "}
                    <Link
                        className="font-medium text-primary hover:underline"
                        href={ROUTES.AUTH.LOGIN}
                    >
                        {auth.register.signIn}
                    </Link>
                </p>
            </PageFooter>
        </form>
    );
}
