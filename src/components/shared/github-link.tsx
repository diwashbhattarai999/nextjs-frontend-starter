import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { siteConfig } from "@/lib/config";
import { Icons } from "./icons";

export function GitHubLink() {
    return (
        <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
            <Button className="h-8 shadow-none" size="sm" variant="ghost">
                <Icons.gitHub />
                <Suspense fallback={<Skeleton className="h-4 w-10.5" />}>
                    <StarsCount />
                </Suspense>
            </Button>
        </Link>
    );
}

export async function StarsCount() {
    const data = await fetch(siteConfig.links.github_api || "", {
        next: { revalidate: 60 * 60 }, // 1 hour
    });
    const json = await data.json();

    // Handle API errors (rate limiting, not found, etc.)
    if (!data.ok || typeof json.stargazers_count !== "number") {
        return (
            <span className="w-fit text-muted-foreground text-xs tabular-nums">
                0
            </span>
        );
    }

    const formattedCount =
        json.stargazers_count >= 1000
            ? `${Math.round(json.stargazers_count / 1000)}k`
            : json.stargazers_count.toLocaleString();

    return (
        <span className="w-fit text-muted-foreground text-xs tabular-nums">
            {formattedCount}
        </span>
    );
}
