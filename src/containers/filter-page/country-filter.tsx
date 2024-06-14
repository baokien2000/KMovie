import { Categories, CategoriesSlug, categoriesMap, countries, countriesMap, countriesSlug } from "@/enum/movies";
import { cn } from "@/lib/cn";
import { useFilterStore } from "@/store/movies/filter.store";
import React from "react";

const CountryFilter = () => {
    const currentCountry = useFilterStore((state) => state.country);
    const setCountry = useFilterStore((state) => state.setCountry);
    const handleClick = (country: string) => {
        if (currentCountry && currentCountry === country) {
            setCountry(null);
        } else setCountry(country);
    };
    return (
        <div className="text-sm p-2 space-y-2">
            <h2 className="text-default font-medium">Quốc gia</h2>
            <div className="flex flex-wrap gap-1 text-[13px] ">
                {countriesSlug.map((country, index) => {
                    return (
                        <div
                            className={cn(
                                "px-2 cursor-pointer  h-9 bg-[#444444] flex items-center justify-center hover:text-black hover:bg-mainColor/95 ",
                                {
                                    "bg-mainColor hover:bg-mainColor text-black": currentCountry === country,
                                }
                            )}
                            key={`country-${index}`}
                            onClick={() => handleClick(country)}
                        >
                            {countriesMap.get(country)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CountryFilter;
