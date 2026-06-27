import { ErrorPage } from "@/features/errors/components/error-page";
import { getErrorPageMetadata } from "@/features/errors/lib/get-error-page-metadata";

export async function generateMetadata() {
    return getErrorPageMetadata("maintenance");
}

export default function MaintenancePage() {
    return <ErrorPage errorKey="maintenance" />;
}
