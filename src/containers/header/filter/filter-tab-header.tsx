import { MovieTabs } from "@/enum/movies";
import { Tab, TabList } from "@headlessui/react";
import Link from "next/link";
import React from "react";

const FilterTabHeader = () => {
    return (
        <TabList className={"flex font-semibold   border-mainColor border-t-2 "}>
            {MovieTabs.map((item, index) =>
                ["category", "year", "country"].includes(item.id) ? (
                    <Tab
                        key={index}
                        className={
                            "w-full transition-colors !outline-none duration-500 rounded-b ease-in data-[selected]:text-dark1 py-3 data-[selected]:bg-mainColor hover:text-mainColor text-title"
                        }
                    >
                        {item.name}
                    </Tab>
                ) : (
                    <Link
                        className="w-full transition-colors text-center !outline-none duration-500 rounded-b ease-in data-[selected]:text-dark1 py-3 data-[selected]:bg-mainColor hover:text-mainColor text-title"
                        href={`/movies/${item.slug}`}
                        key={index}
                    >
                        {item.name}
                    </Link>
                )
            )}
        </TabList>
    );
};

export default FilterTabHeader;
