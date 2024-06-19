import { years } from "@/enum/movies";
import { TabPanel } from "@headlessui/react";
import { Link } from "@/lib/router-events";
import React from "react";

const YearContent = ({ close }: { close: () => void }) => {
    return (
        <TabPanel className={"w-full flex flex-wrap border-collapse "}>
            {years.map((item, index) => (
                <Link
                    href={`/loc-phim?year=${item}`}
                    onClick={close}
                    key={item}
                    className="w-1/6 text-center cursor-pointer hover:bg-white/5     ring-[1px] ring-des text-title flex justify-center items-center p-2"
                >
                    {item}
                </Link>
            ))}
        </TabPanel>
    );
};

export default YearContent;
