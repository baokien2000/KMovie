import { Categories, sorts, types, years } from "@/enum/movies";
import { MovieFilterSort } from "@/interface/movie-filter";
import { cn } from "@/lib/cn";
import { useFilterStore } from "@/store/movies/filter.store";
import React from "react";

const Sort = () => {
    const currentSort = useFilterStore((state) => state.sort);
    const setSort = useFilterStore((state) => state.setSort);
    const handleClick = (sort: string) => {
        if (currentSort && currentSort === sort) {
            setSort(null);
        } else setSort(sort);
    };
    return (
        <div className="text-sm p-2 space-y-2">
            <h2 className="text-default font-medium">Sắp sếp</h2>
            <div className="flex flex-wrap gap-1 text-[13px] ">
                {sorts.map((sort, index) => {
                    return (
                        <div
                            className={cn(
                                "px-2 cursor-pointer  h-9 bg-[#444444] flex items-center justify-center hover:text-black hover:bg-mainColor/95 ",
                                {
                                    "bg-mainColor hover:bg-mainColor text-black": currentSort === sort,
                                    "pointer-events-none  opacity-50": ["rate", "comment"].includes(sort),
                                }
                            )}
                            key={`sort-${index}`}
                            onClick={() => handleClick(sort)}
                        >
                            {MovieFilterSort.get(sort)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sort;
