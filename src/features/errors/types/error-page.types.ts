import type { AppMessages } from "@/types/i18n";

export type ErrorPageKey = keyof AppMessages["Errors"];
export type ErrorPageFieldKey = keyof AppMessages["Errors"]["notFound"];
export type ErrorTranslationKey = `${ErrorPageKey}.${ErrorPageFieldKey}`;
