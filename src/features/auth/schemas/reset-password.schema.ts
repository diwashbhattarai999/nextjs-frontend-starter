import { z } from "zod";

import { createPasswordSchema, type PasswordSchemaMessages } from "@/schema/common.schema";

interface ConfirmPasswordSchemaMessages {
    required: string;
    mismatch: string;
}

interface ResetPasswordSchemaMessages {
    password: PasswordSchemaMessages;
    confirmPassword: ConfirmPasswordSchemaMessages;
}

/**
 * Creates the reset password form validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod schema for reset password form values.
 */
export function createResetPasswordSchema(messages: ResetPasswordSchemaMessages) {
    return z
        .object({
            password: createPasswordSchema(messages.password),
            confirmPassword: z.string().min(1, { error: messages.confirmPassword.required }),
        })
        .refine((values) => values.password === values.confirmPassword, {
            error: messages.confirmPassword.mismatch,
            path: ["confirmPassword"],
        });
}

export type ResetPasswordFormValues = z.infer<ReturnType<typeof createResetPasswordSchema>>;

export interface ResetPasswordPayload {
    password: ResetPasswordFormValues["password"];
    token: string;
}
