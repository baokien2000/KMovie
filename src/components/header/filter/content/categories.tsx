import { Categories } from "@/enum/movies";
import { TabPanel } from "@headlessui/react";
import React from "react";

const CategoryContent = () => {
    return (
        <TabPanel className={"w-full flex flex-wrap border-collapse "}>
            {Categories.map((item, index) => (
                <div
                    key={item}
                    className="w-1/6 text-center cursor-pointer hover:bg-white/5     ring-[1px] ring-des text-title flex justify-center items-center p-2"
                >
                    {item}
                </div>
            ))}
        </TabPanel>
    );
};

export default CategoryContent;