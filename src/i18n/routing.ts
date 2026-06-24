import { defineRouting } from "next-intl/routing";

import { SUPPORTED_LOCALES } from "@/i18n/locale.config";

export const routing = defineRouting({
    locales: [...SUPPORTED_LOCALES],

    defaultLocale: "en",

    localeDetection: true,

    localePrefix: "as-needed",
});
