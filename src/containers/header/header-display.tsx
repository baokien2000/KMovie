"use client";
import React, { useEffect } from "react";

const HeaderDisplay = () => {
    let scroll = 0;
    useEffect(() => {
        const handleScroll = () => {
            const headerAppClass = document?.getElementById("header-app")?.classList;
            const hasAutoScroll = headerAppClass?.contains("auto-scroll");

            if (scroll >= window.scrollY || window.scrollY < 72) {
                if (!hasAutoScroll) {
                    headerAppClass?.remove("opacity-0");
                }
                if (window.scrollY < 72) {
                    headerAppClass?.remove("auto-scroll");
                    headerAppClass?.remove("opacity-0");
                }
            } else {
                headerAppClass?.add("opacity-0");
                headerAppClass?.remove("auto-scroll");
            }

            scroll = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return null;
};

export default HeaderDisplay;
