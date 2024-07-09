"use client";
import { Link, useRouter } from "@/lib/router-events";
import React from "react";
import { BookmarkIcon, ClockIcon, LoginIcon, LogoutIcon, PencilSquareIcon, UserCircleIcon, UserIcon } from "../../../public/static/svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/20/solid";
import { useAuthStore } from "@/store/auth/auth.store";
import axios from "axios";
import { usePathname } from "next/navigation";
import { on } from "events";
import { cn } from "@/lib/cn";
import WebFeedback from "./web-feedback";

const UserButtonData = [
    {
        icon: <UserIcon className="size-5 " />,
        title: "Tài khoản",
        href: "/tai-khoan",
    },
    {
        icon: <ClockIcon fill="currentColor" className="size-5 " />,
        title: "Xem gần đây",
        href: "/xem-gan-day",
        className: "flex sm:hidden",
    },
    {
        icon: <BookmarkIcon fill="currentColor" className="size-5 " />,
        title: "Phim đã theo dõi",
        href: "/theo-doi",
        className: "flex sm:hidden",
    },
];

const UserButton = () => {
    const user = useAuthStore((state) => state.user);
    const pathName = usePathname();
    const router = useRouter();
    const handleLogout = async () => {
        router.push("/dang-nhap");
        useAuthStore.setState({ user: null });
    };

    return user ? (
        <Menu>
            <MenuButton className="w-[42px] h-9 rounded text-title flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80">
                <UserCircleIcon className="mx-auto size-[22px]  " />
            </MenuButton>

            <MenuItems
                anchor="bottom end"
                className="w-52 leading-[1.2] z-10 mt-4 origin-top-right rounded-xl border border-white/5 bg-mainBackground/90 p-1 text-sm/6 text-title transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                {UserButtonData.map((item, index) => (
                    <MenuItem key={item.href}>
                        <Link
                            href={item.href}
                            className={cn(
                                "group  flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:text-mainColor",
                                item?.className,
                                pathName === item.href ? "text-mainColor" : ""
                            )}
                        >
                            {item.icon}
                            <span>{item.title}</span>

                            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘</kbd>
                        </Link>
                    </MenuItem>
                ))}
                <MenuItem>
                    <button
                        onClick={handleLogout}
                        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:text-mainColor"
                    >
                        <LogoutIcon fill="currentColor" className="     " />
                        <span className="">Đăng xuất</span>

                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘</kbd>
                    </button>
                </MenuItem>
                {/* <MenuItem>{({ close }) => <WebFeedback close={close} />}</MenuItem> */}
            </MenuItems>
        </Menu>
    ) : (
        <Link
            href={"/dang-nhap"}
            aria-label="login"
            className="w-[42px] h-9 rounded text-title flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80"
        >
            <LoginIcon className="size-[22px] mx-auto" />
        </Link>
    );
};

export default UserButton;
