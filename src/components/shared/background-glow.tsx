import { cn } from "@/lib/utils";

interface BackgroundGlowProps {
    className?: string;
}

export const BackgroundGlow = ({ className }: BackgroundGlowProps) => {
    return (
        <div
            className={cn(
                "pointer-events-none absolute top-1/2 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary/30 blur-[120px] dark:bg-primary/30",
                className
            )}
        />
    );
};
