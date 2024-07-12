"use client";
import { useEffect } from "react";
import throttle from "lodash.throttle";

const HeaderDisplay = () => {
    let scroll = 0;
    useEffect(() => {
        const handleScroll = () => {
            let headerAppClass = document?.getElementById("header-app")?.classList;
            let hasAutoScroll = headerAppClass?.contains("auto-scroll");
            let isFilterOpen = headerAppClass?.contains("filter-open");
            if (window.scrollY - scroll === 1 && isFilterOpen) isFilterOpen = false;
            if (scroll >= window.scrollY || window.scrollY < 72) {
                if (!hasAutoScroll) {
                    headerAppClass?.remove("opacity-0");
                    headerAppClass?.remove("pointer-events-none");
                }
                if (window.scrollY < 72) {
                    headerAppClass?.remove("auto-scroll");
                    headerAppClass?.remove("opacity-0");
                    headerAppClass?.remove("pointer-events-none");
                }
                headerAppClass?.remove("filter-open");
            } else {
                if (isFilterOpen) {
                    // const desiredScrollPosition = window.scrollY - (20 - (window.scrollY - scroll));
                    window.scrollTo({ top: scroll, behavior: "instant" });
                    headerAppClass?.remove("filter-open");
                } else {
                    headerAppClass?.add("opacity-0");
                    headerAppClass?.add("pointer-events-none");
                    headerAppClass?.remove("auto-scroll");
                    headerAppClass?.remove("filter-open");
                }
            }

            scroll = window.scrollY;
        };
        const throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);

        return () => {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    return null;
};

export default HeaderDisplay;
