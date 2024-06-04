"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Logo from "../../../public/static/images/logo/logo_sm_light.png";
import Logo_Small from "../../../public/static/images/logo/Icon_light.png";
import Input from "../UI/input";
import { BookmarkIcon, ClockIcon, HamburgerIcon, LogoutIcon, MenuIcon, XIcon } from "../../../public/static/svg";
import DropdownInput from "../UI/dropdown-input";
import SearchMovie from "./search/search-movie";
import { cn } from "@/lib/cn";
import CategoryBtn from "./category/category-btn";

const Header = () => {
    return (
        <nav className="w-full block relative z-10 bg-mainBackground ">
            <div className="App-header mx-auto px-6 flex flex-col h-[117px] sm:h-[70px] w-full ">
                <div className="h-[70px] w-full gap-5 flex items-center justify-between">
                    <Link href={"/"} className="object-cover cursor-pointer h-fit ">
                        <Image height={70} width={150} className="tablet:block hidden" alt="Logo" src={Logo} />
                        <Image height={50} width={50} alt="Logo" className="block tablet:hidden" src={Logo_Small} />
                    </Link>

                    {/* <Input /> */}
                    <SearchMovie />
                    <div className="flex gap-3">
                        <CategoryBtn />
                        <Link
                            href={"/"}
                            aria-label="watch-history"
                            className="h-[36px] rounded flex items-center px-[10px] py-[5px] bg-black border-[1px] cursor-pointer border-des opacity-80"
                        >
                            <ClockIcon />
                        </Link>
                        <Link
                            href={"/"}
                            aria-label="bookmark"
                            className="h-[36px] rounded flex items-center px-[10px] py-[5px] bg-black border-[1px] cursor-pointer border-des opacity-80"
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
