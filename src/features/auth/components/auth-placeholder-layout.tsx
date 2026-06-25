import { PageContainer, PageContent } from "@/components/shared/page";

interface AuthPlaceholderLayoutProps {
    children: React.ReactNode;
}

/**
 * Centers placeholder auth pages such as register and forgot password.
 */
export function AuthPlaceholderLayout({ children }: AuthPlaceholderLayoutProps) {
    return (
        <PageContent align="center" className="px-6 py-12">
            <PageContainer className="justify-center py-0" width="narrow">
                {children}
            </PageContainer>
        </PageContent>
    );
}
