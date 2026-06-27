import { Page, PageContainer } from "@/components/shared/page";
import { LegalShell } from "@/features/legal/components/legal-shell";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <Page>
            <PageContainer width="default">
                <LegalShell>{children}</LegalShell>
            </PageContainer>
        </Page>
    );
}
