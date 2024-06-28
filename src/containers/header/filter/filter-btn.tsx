"use client";
import { cn } from "@/lib/cn";
import React from "react";
import { HamburgerIcon, LoadingIcon } from "../../../../public/static/svg";
import { Popover, PopoverButton, PopoverPanel, TabGroup, Transition } from "@headlessui/react";
// import FilterContent from "./filter-content";
import FilterTabHeader from "./filter-tab-header";
import dynamic from "next/dynamic";

const FilterContent = dynamic(() => import("./filter-content"), {
    ssr: false,
    loading: () => (
        <div className="w-full  flex items-center h-[50px]">
            <LoadingIcon className="m-auto w-fit " fill="#cac9c9" />
        </div>
    ),
});
const FilterButton = () => {
    return (
        <Popover>
            {({ open, close }) => (
                <>
                    <PopoverButton
                        className={cn(
                            open ? "border-mainColor bg-mainColor" : "border-des bg-black",
                            "h-[36px] w-[42px] outline-none rounded flex items-center  py-[5px]  border-[1px] cursor-pointer  hover:opacity-80"
                        )}
                        aria-label="category-button"
                    >
                        <HamburgerIcon className={open ? "active" : ""} />
                    </PopoverButton>
                    <Transition
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        appear={true}
                    >
                        <PopoverPanel
                            anchor="bottom"
                            className=" sm:mt-6 mt-4 !max-w-screen-laptop sm:px-6 px-3 !left-1/2 z-[100] !-translate-x-1/2 transform   w-full  text-sm/6 "
                        >
                            <TabGroup className={"bg-mainBackground/95 border border-t-0 border-des rounded overflow-hidden"}>
                                <FilterTabHeader close={close} />
                                <FilterContent close={close} />
                            </TabGroup>
                        </PopoverPanel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default FilterButton;
