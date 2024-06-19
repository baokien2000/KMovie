import { MovieTabs } from "@/enum/movies";
import { Link } from "@/lib/router-events";
import { Tab, TabList } from "@headlessui/react";
import React from "react";

const FilterTabHeader = ({ close }: { close: () => void }) => {
    return (
        <TabList className={"flex font-semibold   border-mainColor border-t-2 "}>
            {MovieTabs.map((item, index) =>
                ["category", "year", "country"].includes(item.id) ? (
                    <Tab
                        key={index}
                        className={
                            "w-full transition-colors !outline-none duration-500 rounded-b ease-in data-[selected]:text-black py-3 data-[selected]:bg-mainColor hover:text-mainColor text-title"
                        }
                    >
                        {item.name}
                    </Tab>
                ) : (
                    <Link
                        className="w-full transition-colors text-center !outline-none duration-500 rounded-b ease-in data-[selected]:text-dark1 py-3 data-[selected]:bg-mainColor hover:text-mainColor text-title"
                        href={`/${item.slug}`}
                        onClick={close}
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
