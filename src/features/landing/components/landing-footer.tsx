import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { Link } from "@/i18n/navigation";

import { useLandingTranslations } from "../hooks/use-landing-translations";

export function LandingFooter() {
    const { footer } = useLandingTranslations();

    return (
        <footer className="mt-4 border-t pt-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-sm">{footer.product}</h3>
                    <nav aria-label={footer.product} className="flex flex-col gap-2">
                        <FooterLink href={ROUTES.DASHBOARD.HOME}>{footer.overview}</FooterLink>
                        <FooterLink href={ROUTES.DASHBOARD.SETTINGS}>{footer.settings}</FooterLink>
                        <FooterLink href={ROUTES.DASHBOARD.PROFILE}>{footer.profile}</FooterLink>
                        <FooterLink href={ROUTES.AUTH.LOGIN}>{footer.login}</FooterLink>
                        <FooterLink href={ROUTES.AUTH.REGISTER}>{footer.register}</FooterLink>
                    </nav>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-sm">{footer.legal}</h3>
                    <nav aria-label={footer.legal} className="flex flex-col gap-2">
                        <FooterLink href={ROUTES.LEGAL.PRIVACY_POLICY}>
                            {footer.privacyPolicy}
                        </FooterLink>
                        <FooterLink href={ROUTES.LEGAL.TERMS_OF_SERVICE}>
                            {footer.termsOfService}
                        </FooterLink>
                        <FooterLink href={ROUTES.LEGAL.COOKIE_POLICY}>
                            {footer.cookiePolicy}
                        </FooterLink>
                    </nav>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-sm">{footer.resources}</h3>
                    <nav aria-label={footer.resources} className="flex flex-col gap-2">
                        <a
                            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                            href={siteConfig.social.github}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {footer.github}
                        </a>
                    </nav>
                </div>
            </div>

            <Separator className="my-8" />

            <p className="text-center text-muted-foreground text-sm">{footer.copyright}</p>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
            href={href}
        >
            {children}
        </Link>
    );
}
