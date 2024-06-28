import { Categories } from "@/enum/movies";
import { Link } from "@/lib/router-events";
import { useFilterStore } from "@/store/movies/filter.store";
import { TabPanel } from "@headlessui/react";
import React from "react";

const CategoryContent = ({ close }: { close: () => void }) => {
    return (
        <TabPanel className={"w-full flex flex-wrap border-collapse "}>
            {Categories.map((item, index) => (
                <Link
                    onClick={close}
                    href={`/the-loai/${item.slug}`}
                    key={item.slug}
                    className="sm:w-1/6 w-1/4 text-center cursor-pointer hover:bg-white/5     ring-[1px] ring-des text-title flex justify-center items-center p-2"
                >
                    {item.name}
                </Link>
            ))}
        </TabPanel>
    );
};

export default CategoryContent;
