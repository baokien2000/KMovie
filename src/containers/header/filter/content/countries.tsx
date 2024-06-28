import { countries } from "@/enum/movies";
import { TabPanel } from "@headlessui/react";
import { Link } from "@/lib/router-events";
import React from "react";

const CountriesContent = ({ close }: { close: () => void }) => {
    return (
        <TabPanel className={"w-full flex flex-wrap border-collapse "}>
            {countries.map((item, index) => (
                <Link
                    href={`/quoc-gia/${item.slug}`}
                    onClick={close}
                    key={item.slug}
                    className="sm:w-1/6 w-1/3 text-center cursor-pointer hover:bg-white/5     ring-[1px] ring-des text-title flex justify-center items-center p-2"
                >
                    {item.name}
                </Link>
            ))}
        </TabPanel>
    );
};

export default CountriesContent;
