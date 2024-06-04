"use client";
import Image, { StaticImageData } from "next/image";
import { useInView } from "react-intersection-observer";

type ImageDynamicBlurProps = {
    src: string | StaticImageData;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager" | undefined;
    fill?: boolean;
    priority?: boolean;
    unoptimized?: boolean;
    sizes?: string;
    width?: number;
    height?: number;
    quality?: number;
};

export default function ImageView({ src, alt, className, ...rest }: ImageDynamicBlurProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <Image
            ref={ref}
            src={src}
            alt={alt}
            width={rest.width}
            fill={rest.fill}
            height={rest.height}
            className={className}
            {...rest}
            style={{
                opacity: inView ? 1 : 0,
                transition: "opacity 0.2s cubic-bezier(0.3, 0.2, 0.2, 0.8)",
            }}
        />
    );
}
