import { z } from "zod";

/**
 * Schema limits.
 */
export const SCHEMA_LIMITS = {
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_MAX_LENGTH: 128,

    PHONE_MIN_LENGTH: 7,
    PHONE_MAX_LENGTH: 20,

    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 120,
} as const;

export interface EmailSchemaMessages {
    invalid: string;
}

export interface PasswordSchemaMessages {
    required: string;
    min: string;
    max: string;
}

export interface PhoneNumberSchemaMessages {
    required: string;
    min: string;
    max: string;
}

export interface FullNameSchemaMessages {
    required: string;
    min: string;
    max: string;
}

/**
 * Creates an email validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod email schema.
 */
export function createEmailSchema(messages: EmailSchemaMessages) {
    return z.email({ error: messages.invalid }).toLowerCase();
}

/**
 * Creates a password validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod password schema.
 */
export function createPasswordSchema(messages: PasswordSchemaMessages) {
    return z
        .string()
        .min(1, { error: messages.required })
        .min(SCHEMA_LIMITS.PASSWORD_MIN_LENGTH, { error: messages.min })
        .max(SCHEMA_LIMITS.PASSWORD_MAX_LENGTH, { error: messages.max });
}

/**
 * Creates a phone number validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod phone number schema.
 */
export function createPhoneNumberSchema(messages: PhoneNumberSchemaMessages) {
    return z
        .string()
        .min(1, { error: messages.required })
        .min(SCHEMA_LIMITS.PHONE_MIN_LENGTH, { error: messages.min })
        .max(SCHEMA_LIMITS.PHONE_MAX_LENGTH, { error: messages.max });
}

/**
 * Creates a full name validation schema with localized error messages.
 *
 * @param messages - Localized validation messages.
 * @returns Zod full name schema.
 */
export function createFullNameSchema(messages: FullNameSchemaMessages) {
    return z
        .string()
        .min(1, { error: messages.required })
        .min(SCHEMA_LIMITS.NAME_MIN_LENGTH, { error: messages.min })
        .max(SCHEMA_LIMITS.NAME_MAX_LENGTH, { error: messages.max });
}
