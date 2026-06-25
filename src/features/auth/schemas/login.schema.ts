import { z } from "zod";

import {
    createEmailSchema,
    createPasswordSchema,
    type EmailSchemaMessages,
    type PasswordSchemaMessages,
} from "@/schema/common.schema";

interface LoginSchemaMessages {
    email: EmailSchemaMessages;
    password: PasswordSchemaMessages;
}

/**
 * Creates the login form validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod schema for login form values.
 */
export function createLoginSchema(messages: LoginSchemaMessages) {
    return z.object({
        email: createEmailSchema(messages.email),
        password: createPasswordSchema(messages.password),
    });
}

export type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;
