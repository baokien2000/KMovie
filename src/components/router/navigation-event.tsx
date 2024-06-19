"use client";
import { useRouter } from "@/lib/router-events";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

export function NavigationEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [progress, setProgress] = useState(0);
    const router = useRouter();

    const _push = router.push.bind(router);

    router.push = (href, options) => {
        setProgress(40);
        _push(href, options);
    };

    useEffect(() => {
        setProgress(100);
    }, [pathname, searchParams]);

    return (
        <LoadingBar
            // color="#ffce4f"
            progress={progress}
            // waitingTime={400}
            height={3}
            onLoaderFinished={() => {
                setProgress(0);
            }}
        />
    );
}
