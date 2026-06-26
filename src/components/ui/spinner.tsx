import { cn } from "@/lib/utils";

import { Icons } from "../shared/icons";

function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
    return (
        <Icons.loader
            aria-label="Loading"
            className={cn("size-4 animate-spin", className)}
            data-slot="spinner"
            role="status"
            {...props}
        />
    );
}

export { Spinner };
