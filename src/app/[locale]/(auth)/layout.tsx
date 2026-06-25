import { Page } from "@/components/shared/page";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return <Page scroll="hidden">{children}</Page>;
}
