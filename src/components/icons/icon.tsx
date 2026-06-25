import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

interface IconProps extends ImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

export const Icon = ({ src, alt, className, width = 24, height = 24, ...props }: IconProps) => {
    return (
        <Image
            alt={alt}
            className={cn("size-4", className)}
            height={height}
            src={src}
            width={width}
            {...props}
        />
    );
};
