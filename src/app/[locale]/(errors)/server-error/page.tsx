import { ErrorPage } from "@/features/errors/components/error-page";
import { getErrorPageMetadata } from "@/features/errors/lib/get-error-page-metadata";

export async function generateMetadata() {
    return getErrorPageMetadata("serverError");
}

export default function ServerErrorPage() {
    return <ErrorPage errorKey="serverError" />;
}
