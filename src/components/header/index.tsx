"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import Logo from "../../../public/static/images/logo/logo_sm_light.png";
import Logo_Small from "../../../public/static/images/logo/Icon_light.png";
import { BookmarkIcon, ClockIcon, LogoutIcon } from "../../../public/static/svg";
import SearchMovie from "./search/search-movie";
import CategoryBtn from "./category/category-btn";

const Header = () => {
    // const [scroll, setScroll] = React.useState(0);
    let scroll = 0;
    useEffect(() => {
        const handleScroll = () => {
            console.log("scroll", scroll, window.scrollY);
            if (scroll >= window.scrollY || window.scrollY < 72) {
                document?.getElementById("header-app")?.classList.remove("opacity-0");
            } else {
                document?.getElementById("header-app")?.classList.add("opacity-0");
            }

            // setScroll(window.scrollY);
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
                        <Image sizes="150px" priority height={70} width={150} className="tablet:block hidden" alt="Logo" src={Logo} />
                        <Image sizes="50px" priority height={50} width={50} alt="Logo" className="block tablet:hidden" src={Logo_Small} />
                    </Link>

                    {/* <Input /> */}
                    <SearchMovie />
                    <div className="flex gap-3">
                        <CategoryBtn />
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
