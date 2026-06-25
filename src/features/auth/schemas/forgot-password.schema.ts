import { z } from "zod";

import { createEmailSchema, type EmailSchemaMessages } from "@/schema/common.schema";

interface ForgotPasswordSchemaMessages {
    email: EmailSchemaMessages;
}

/**
 * Creates the forgot password form validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod schema for forgot password form values.
 */
export function createForgotPasswordSchema(messages: ForgotPasswordSchemaMessages) {
    return z.object({
        email: createEmailSchema(messages.email),
    });
}

export type ForgotPasswordFormValues = z.infer<ReturnType<typeof createForgotPasswordSchema>>;
