import { Separator } from "@/components/ui/separator";
import { ROUTES } from "@/configs/routes";
import { siteConfig } from "@/configs/site";
import { Link } from "@/i18n/navigation";

interface LandingFooterProps {
    product: string;
    legal: string;
    resources: string;
    overview: string;
    settings: string;
    profile: string;
    login: string;
    register: string;
    privacyPolicy: string;
    termsOfService: string;
    cookiePolicy: string;
    github: string;
    copyright: string;
}

export function LandingFooter({
    product,
    legal,
    resources,
    overview,
    settings,
    profile,
    login,
    register,
    privacyPolicy,
    termsOfService,
    cookiePolicy,
    github,
    copyright,
}: LandingFooterProps) {
    return (
        <footer className="mt-4 border-t pt-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-sm">{product}</h3>
                    <nav aria-label={product} className="flex flex-col gap-2">
                        <FooterLink href={ROUTES.DASHBOARD.HOME}>{overview}</FooterLink>
                        <FooterLink href={ROUTES.DASHBOARD.SETTINGS}>{settings}</FooterLink>
                        <FooterLink href={ROUTES.DASHBOARD.PROFILE}>{profile}</FooterLink>
                        <FooterLink href={ROUTES.AUTH.LOGIN}>{login}</FooterLink>
                        <FooterLink href={ROUTES.AUTH.REGISTER}>{register}</FooterLink>
                    </nav>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-sm">{legal}</h3>
                    <nav aria-label={legal} className="flex flex-col gap-2">
                        <FooterLink href={ROUTES.LEGAL.PRIVACY_POLICY}>{privacyPolicy}</FooterLink>
                        <FooterLink href={ROUTES.LEGAL.TERMS_OF_SERVICE}>
                            {termsOfService}
                        </FooterLink>
                        <FooterLink href={ROUTES.LEGAL.COOKIE_POLICY}>{cookiePolicy}</FooterLink>
                    </nav>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-medium text-sm">{resources}</h3>
                    <nav aria-label={resources} className="flex flex-col gap-2">
                        <a
                            className="text-muted-foreground text-sm transition-colors hover:text-foreground"
                            href={siteConfig.social.github}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {github}
                        </a>
                    </nav>
                </div>
            </div>

            <Separator className="my-8" />

            <p className="text-center text-muted-foreground text-sm">{copyright}</p>
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
