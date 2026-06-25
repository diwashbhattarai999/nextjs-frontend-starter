import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ComingSoonPage } from "@/components/shared/coming-soon-page";
import { AuthPlaceholderLayout } from "@/features/auth/components/auth-placeholder-layout";

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations("Pages");

    return { title: t("auth.resetPassword.title") };
}

export default async function ResetPasswordPage() {
    const t = await getTranslations("Pages");

    return (
        <AuthPlaceholderLayout>
            <ComingSoonPage
                description={t("auth.resetPassword.description")}
                title={t("auth.resetPassword.title")}
            />
        </AuthPlaceholderLayout>
    );
}
