import { z } from "zod";

/**
 * Schema limits.
 *
 * @returns The schema limits.
 */
const SCHEMA_LIMITS = {
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_MAX_LENGTH: 128,

    PHONE_MIN_LENGTH: 7,
    PHONE_MAX_LENGTH: 20,

    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 120,
} as const;

/**
 * Email schema.
 *
 * @returns The email schema.
 */
export const emailSchema = z.email({ message: "Enter a valid email address" }).toLowerCase();

/**
 * Password schema.
 *
 * @returns The password schema.
 */
export const passwordSchema = z
    .string()
    .min(1, { message: "Password is required" })
    .min(SCHEMA_LIMITS.PASSWORD_MIN_LENGTH, {
        message: `Password must be at least ${SCHEMA_LIMITS.PASSWORD_MIN_LENGTH} characters`,
    })
    .max(SCHEMA_LIMITS.PASSWORD_MAX_LENGTH, {
        message: `Password must be at most ${SCHEMA_LIMITS.PASSWORD_MAX_LENGTH} characters`,
    });

/**
 * Phone number schema.
 *
 * @returns The phone number schema.
 */
export const phoneNumberSchema = z
    .string()
    .min(1, { message: "Phone number is required" })
    .min(SCHEMA_LIMITS.PHONE_MIN_LENGTH, {
        message: `Phone number must be at least ${SCHEMA_LIMITS.PHONE_MIN_LENGTH} characters`,
    })
    .max(SCHEMA_LIMITS.PHONE_MAX_LENGTH, {
        message: `Phone number must be at most ${SCHEMA_LIMITS.PHONE_MAX_LENGTH} characters`,
    });

/**
 * Full name schema.
 *
 * @returns The full name schema.
 */
export const fullNameSchema = z
    .string()
    .min(1, { message: "Full name is required" })
    .min(SCHEMA_LIMITS.NAME_MIN_LENGTH, {
        message: `Name must be at least ${SCHEMA_LIMITS.NAME_MIN_LENGTH} characters`,
    })
    .max(SCHEMA_LIMITS.NAME_MAX_LENGTH, {
        message: `Name must be at most ${SCHEMA_LIMITS.NAME_MAX_LENGTH} characters`,
    });
