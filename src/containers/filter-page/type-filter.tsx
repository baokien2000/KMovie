import { Categories, MovieType, types, years } from "@/enum/movies";
import { cn } from "@/lib/cn";
import { useFilterStore } from "@/store/movies/filter.store";
import React from "react";

const TypeFilter = () => {
    const currentType = useFilterStore((state) => state.type);
    const setType = useFilterStore((state) => state.setType);
    const handleClick = (type: string) => {
        if (currentType && currentType === type) {
            setType(null);
        } else setType(type);
    };
    return (
        <div className="text-sm p-2 space-y-2">
            <h2 className="text-default font-medium">Loại</h2>
            <div className="flex flex-wrap gap-1 text-[13px] ">
                {types.map((type, index) => {
                    return (
                        <div
                            className={cn(
                                "px-2 cursor-pointer  h-9 bg-[#444444] flex items-center justify-center hover:text-black hover:bg-mainColor/95 ",
                                {
                                    "bg-mainColor hover:bg-mainColor text-black": currentType === type,
                                }
                            )}
                            key={`category-${index}`}
                            onClick={() => handleClick(type)}
                        >
                            {MovieType.get(type)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TypeFilter;
