import type authMessages from "@/i18n/messages/en/Auth.json";
import type commonMessages from "@/i18n/messages/en/Common.json";
import type errorsMessages from "@/i18n/messages/en/Errors.json";
import type homePageMessages from "@/i18n/messages/en/HomePage.json";
import type legalMessages from "@/i18n/messages/en/Legal.json";
import type pagesMessages from "@/i18n/messages/en/Pages.json";
import type { routing } from "@/i18n/routing";

export interface AppMessages {
    Auth: typeof authMessages;
    Common: typeof commonMessages;
    Errors: typeof errorsMessages;
    HomePage: typeof homePageMessages;
    Legal: typeof legalMessages;
    Pages: typeof pagesMessages;
}

declare module "next-intl" {
    interface AppConfig {
        Locale: (typeof routing.locales)[number];
        Messages: AppMessages;
    }
}

export type { AppMessages };
