import type commonMessages from "@/i18n/messages/en/Common.json";
import type homePageMessages from "@/i18n/messages/en/HomePage.json";
import type pagesMessages from "@/i18n/messages/en/Pages.json";
import type { routing } from "@/i18n/routing";

export interface AppMessages {
    Common: typeof commonMessages;
    HomePage: typeof homePageMessages;
    Pages: typeof pagesMessages;
}

declare module "next-intl" {
    interface AppConfig {
        Locale: (typeof routing.locales)[number];
        Messages: AppMessages;
    }
}

export type { AppMessages };
