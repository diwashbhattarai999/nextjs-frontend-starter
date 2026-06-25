"use client";

import {
    Page,
    PageActions,
    PageContent,
    PageDescription,
    PageTitle,
} from "@/components/shared/page";
import { Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/i18n/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <Page>
            <PageContent align="center">
                <Section spacing="sm">
                    <SectionHeader align="center" className="gap-4">
                        <div
                            aria-hidden
                            className="bg-linear-to-b from-foreground to-transparent bg-clip-text font-extrabold text-8xl text-transparent md:text-[10rem]"
                        >
                            404
                        </div>
                        <PageTitle className="font-bold text-2xl">
                            Something&apos;s missing
                        </PageTitle>
                        <PageDescription className="text-base">
                            Sorry, the page you are looking for doesn&apos;t exist or has been
                            moved.
                        </PageDescription>
                    </SectionHeader>
                    <PageActions className="justify-center">
                        <Button onClick={() => router.back()} size="lg">
                            Go back
                        </Button>
                        <Button onClick={() => router.push("/")} size="lg" variant="outline">
                            Back to Home
                        </Button>
                    </PageActions>
                </Section>
            </PageContent>
        </Page>
    );
}
