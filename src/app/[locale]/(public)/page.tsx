"use client";

import { useTranslations } from "next-intl";

export default function HomePage() {
    const t = useTranslations("HomePage");

    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="font-bold text-4xl">
                Welcome to the Next.js 16 Frontend Starter!
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
                This is a boilerplate project to kickstart your Next.js 16
                applications with best practices and a solid foundation.
            </p>

            <p className="mt-2 text-lg text-muted-foreground">{t("title")}</p>
        </div>
    );
}
