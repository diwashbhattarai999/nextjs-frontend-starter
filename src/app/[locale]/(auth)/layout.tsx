import { Page, PageContainer, PageContent } from "@/components/shared/page";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <Page>
            <PageContent align="center" className="px-6 py-12">
                <PageContainer className="justify-center py-0" width="narrow">
                    {children}
                </PageContainer>
            </PageContent>
        </Page>
    );
}
