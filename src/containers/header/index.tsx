import Image from "next/image";
import React, { Suspense } from "react";
import Logo from "../../../public/static/images/logo/logo_sm_light.png";
import Logo_Small from "../../../public/static/images/logo/Icon.png";
import { BookmarkIcon, ClockIcon, LoginIcon, LogoutIcon } from "../../../public/static/svg";
import FilterButton from "./filter/filter-btn";
import { Link } from "@/lib/router-events";
import SearchContainer from "./search/search-container";
import HeaderDisplay from "./header-display";
import UserButton from "./user-button";

const Header = () => {
    return (
        <header
            id="header-app"
            className="w-full h-[62px] sm:h-[72px] sticky transition-all duration-500 top-0 block z-10 bg-mainBackground shadow-lg"
        >
            <nav className=" App-header mx-auto items-center justify-between sm:gap-5 gap-2 max-w-screen-laptop md:px-6 px-3 flex  h-[60px] sm:h-[70px] w-full ">
                <Link href={"/"} className=" w-fit cursor-pointer h-fit min-h-[36px] ">
                    <Image
                        sizes="400px"
                        loading="lazy"
                        height={36}
                        width={120}
                        className="tablet:block object-contain w-[120px] max-w-[120px]  h-9 hidden"
                        alt="Logo"
                        src={Logo}
                    />
                    <Image
                        sizes="100px"
                        loading="lazy"
                        height={36}
                        width={36}
                        alt="Logo"
                        className="block h-auto max-w-[36px] tablet:hidden"
                        src={Logo_Small}
                    />
                </Link>
                <SearchContainer />
                <div className="flex gap-2">
                    <FilterButton />
                    <Link
                        href={"/xem-gan-day"}
                        aria-label="watch-history"
                        className="w-[42px] h-9 hidden rounded sm:flex  items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
                    >
                        <ClockIcon className="mx-auto" />
                    </Link>
                    <Link
                        href={"/theo-doi"}
                        aria-label="bookmark"
                        className="w-[42px] h-9 hidden rounded sm:flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
                    >
                        <BookmarkIcon className="mx-auto" />
                    </Link>
                    <Suspense
                        fallback={
                            <div className="w-[42px] h-9 rounded flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80">
                                <LoginIcon className="size-[22px] mx-auto" />
                            </div>
                        }
                    >
                        <UserButton />
                    </Suspense>
                </div>
            </nav>
            <HeaderDisplay />
        </header>
    );
};

export default Header;
