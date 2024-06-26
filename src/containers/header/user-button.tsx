"use client";
import { Link } from "@/lib/router-events";
import React from "react";
import { LoginIcon, LogoutIcon, PencilSquareIcon, UserCircleIcon } from "../../../public/static/svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PencilIcon } from "@heroicons/react/20/solid";
import { useAuthStore } from "@/store/auth/auth.store";
import axios from "axios";

const UserButton = () => {
    const user = useAuthStore((state) => state.user);
    console.log("user", user);

    const handleLogout = async () => {
        useAuthStore.setState({ user: null });
        const res = await axios({ url: "/api", method: "delete", withCredentials: true });
        console.log("logout res", res);
    };
    return user ? (
        <Menu>
            <MenuButton className="w-[42px] h-9 rounded text-title flex items-center  bg-black border-[1px] cursor-pointer border-des hover:opacity-80">
                <UserCircleIcon className="mx-auto  " />
            </MenuButton>

            <MenuItems
                anchor="bottom end"
                className="w-52 z-10 mt-4 origin-top-right rounded-xl border border-white/5 bg-mainBackground/90 p-1 text-sm/6 text-title transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
            >
                <MenuItem>
                    <Link href="/tai-khoan" className="group  flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:text-mainColor">
                        <PencilSquareIcon className="size-5 " />
                        <span>Tài khoản</span>

                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘</kbd>
                    </Link>
                </MenuItem>
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
