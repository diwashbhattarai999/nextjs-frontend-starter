import { Page, PageContainer } from "@/components/shared/page";

export default function LegalLayout({ children }: { children: React.ReactNode }) {
    return (
        <Page>
            <PageContainer width="narrow">{children}</PageContainer>
        </Page>
    );
}
