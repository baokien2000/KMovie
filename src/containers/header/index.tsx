"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "../../../public/static/images/logo/logo_sm_light.png";
import Logo_Small from "../../../public/static/images/logo/Icon_light.png";
import { BookmarkIcon, ClockIcon, LogoutIcon } from "../../../public/static/svg";
import FilterButton from "./filter/filter-btn";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
const SearchMovieDropdown = dynamic(() => import("./search/search-movie-dropdown"), {
    ssr: false,
});
const SearchMovie = dynamic(() => import("./search/search-movie"), {
    ssr: false,
});
const Header = () => {
    // const [scroll, setScroll] = React.useState(0);
    const pathName = usePathname();
    let scroll = 0;
    useEffect(() => {
        const handleScroll = () => {
            const headerAppClass = document?.getElementById("header-app")?.classList;
            const hasAutoScroll = headerAppClass?.contains("auto-scroll");
            const hasOpacity = headerAppClass?.contains("opacity-0");

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
    return (
        <nav id="header-app" className="w-full h-[72px] sticky transition-all duration-500 top-0 block z-10 bg-mainBackground shadow-lg">
            <div className=" App-header mx-auto max-w-screen-laptop px-6 flex flex-col h-[117px] sm:h-[70px] w-full ">
                <div className="h-[70px] w-full gap-5 flex items-center justify-between">
                    <Link href={"/"} className="object-cover cursor-pointer h-fit ">
                        <Image
                            sizes="150px"
                            loading="lazy"
                            height={70}
                            width={90}
                            className="tablet:block max-w-[90px] hidden"
                            alt="Logo"
                            src={Logo}
                        />
                        <Image
                            sizes="50px"
                            loading="lazy"
                            height={50}
                            width={50}
                            alt="Logo"
                            className="block h-auto max-w-[50px] tablet:hidden"
                            src={Logo_Small}
                        />
                    </Link>

                    {/* <Input /> */}
                    {/* <SearchMovieDropdown /> */}
                    {pathName === "/tim-kiem" ? <SearchMovie /> : <SearchMovieDropdown />}
                    <div className="flex gap-3">
                        <FilterButton />
                        <Link
                            href={"/"}
                            aria-label="watch-history"
                            className="h-[36px] rounded flex items-center px-[10px] py-[5px] bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
                        >
                            <ClockIcon />
                        </Link>
                        <Link
                            href={"/"}
                            aria-label="bookmark"
                            className="h-[36px] rounded flex items-center px-[10px] py-[5px] bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
                        >
                            <BookmarkIcon />
                        </Link>
                        <Link
                            href={"/phim"}
                            aria-label="logout"
                            className="h-[36px] rounded flex items-center px-[10px] py-[5px] bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
                        >
                            <LogoutIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
