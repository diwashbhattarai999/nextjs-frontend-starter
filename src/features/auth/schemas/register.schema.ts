import { z } from "zod";

import {
    createEmailSchema,
    createFullNameSchema,
    createPasswordSchema,
    type EmailSchemaMessages,
    type FullNameSchemaMessages,
    type PasswordSchemaMessages,
} from "@/schema/common.schema";

interface ConfirmPasswordSchemaMessages {
    required: string;
    mismatch: string;
}

interface RegisterSchemaMessages {
    name: FullNameSchemaMessages;
    email: EmailSchemaMessages;
    password: PasswordSchemaMessages;
    confirmPassword: ConfirmPasswordSchemaMessages;
}

/**
 * Creates the register form validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod schema for register form values.
 */
export function createRegisterSchema(messages: RegisterSchemaMessages) {
    return z
        .object({
            name: createFullNameSchema(messages.name),
            email: createEmailSchema(messages.email),
            password: createPasswordSchema(messages.password),
            confirmPassword: z.string().min(1, { error: messages.confirmPassword.required }),
        })
        .refine((values) => values.password === values.confirmPassword, {
            error: messages.confirmPassword.mismatch,
            path: ["confirmPassword"],
        });
}

export type RegisterFormValues = z.infer<ReturnType<typeof createRegisterSchema>>;

export type RegisterPayload = Omit<RegisterFormValues, "confirmPassword">;
