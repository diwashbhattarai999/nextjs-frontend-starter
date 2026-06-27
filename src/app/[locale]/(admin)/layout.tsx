import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import { SiteHeader } from "@/components/layout/sidebar/site-header";
import { Page, PageContainer, PageContent } from "@/components/shared/page";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 16)",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset>
                <SiteHeader />

                <Page className="min-h-[calc(100vh-var(--header-height)-1rem)]">
                    <PageContainer className="h-full" width="full">
                        <PageContent className="h-full" spacing="lg">
                            {children}
                        </PageContent>
                    </PageContainer>
                </Page>
            </SidebarInset>
        </SidebarProvider>
    );
}
