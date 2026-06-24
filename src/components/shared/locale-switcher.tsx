"use client";

import { useLocale, useTranslations } from "next-intl";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { LOCALE_CONFIG, type TLocales } from "@/i18n/locale.config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

/**
 * Allows the user to switch between supported application locales.
 */
export const LocaleSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale();
    const t = useTranslations("Common");

    const handleChange = (value: string | null): void => {
        if (!value) {
            return;
        }

        router.replace(pathname, { locale: value as TLocales });
    };

    const items = routing.locales.map((localeCode) => {
        const meta = LOCALE_CONFIG[localeCode];

        return {
            label: `${meta.flag} ${meta.label}`,
            value: localeCode,
        };
    });

    return (
        <Select items={items} onValueChange={handleChange} value={locale}>
            <SelectTrigger aria-label="lang-switcher" className="w-fit">
                <SelectValue />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{t("languages")}</SelectLabel>
                    {items.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                            {item.label}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};
