import { Categories, CategoriesSlug, categoriesMap } from "@/enum/movies";
import { cn } from "@/lib/cn";
import { useFilterStore } from "@/store/movies/filter.store";
import React from "react";

const CategoryFilter = () => {
    const currentCategories = useFilterStore((state) => state.categories);
    const setCategories = useFilterStore((state) => state.setCategories);
    const handleClick = (category: string) => {
        if (currentCategories.includes(category)) {
            setCategories(currentCategories.filter((item) => item !== category));
        } else {
            setCategories([...currentCategories, category]);
        }
    };
    return (
        <div className="text-sm p-2 space-y-2">
            <h2 className="text-default font-medium">Thể loại</h2>
            <div className="flex flex-wrap gap-1 text-[13px] ">
                {CategoriesSlug.map((category, index) => {
                    return (
                        <div
                            className={cn(
                                "px-2 cursor-pointer  h-9 bg-[#444444] flex items-center justify-center hover:text-black hover:bg-mainColor/95 ",
                                {
                                    "bg-mainColor hover:bg-mainColor text-black": currentCategories.includes(category),
                                }
                            )}
                            key={`category-${index}`}
                            onClick={() => handleClick(category)}
                        >
                            {categoriesMap.get(category)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CategoryFilter;
