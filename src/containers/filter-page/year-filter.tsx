import { Categories, years } from "@/enum/movies";
import { cn } from "@/lib/cn";
import { useFilterStore } from "@/store/movies/filter.store";
import React from "react";

const YearFilter = () => {
    const currentYear = useFilterStore((state) => state.year);
    const setYear = useFilterStore((state) => state.setYear);
    const handleClick = (year: string) => {
        if (currentYear && currentYear === year) {
            setYear(null);
        } else setYear(year);
    };
    return (
        <div className="text-sm p-2 space-y-2">
            <h2 className="text-default font-medium">Năm</h2>
            <div className="flex flex-wrap gap-1 text-[13px] ">
                {years.map((year, index) => {
                    return (
                        <div
                            className={cn(
                                "px-2 cursor-pointer  h-9 bg-[#444444] flex items-center justify-center hover:text-black hover:bg-mainColor/95 ",
                                {
                                    "bg-mainColor text-black hover:bg-mainColor": currentYear === year,
                                }
                            )}
                            key={`year-${index}`}
                            onClick={() => handleClick(year)}
                        >
                            {year}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default YearFilter;
