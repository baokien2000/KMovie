import { useRouter } from "@/lib/router-events";
import { useFilterStore } from "@/store/movies/filter.store";
import React from "react";

const FilterButton = () => {
    const { status, type, year, categories, sort, country } = useFilterStore();
    const router = useRouter();
    const handleFilter = () => {
        let string = "";
        if (status) string += `status=${status}&`;
        if (type) string += `type=${type}&`;
        if (year) string += `year=${year}&`;
        if (categories.length) string += `categories=${categories.join(" ")}&`;
        if (country) string += `country=${country}&`;
        if (sort) string += `sort=${sort}&`;
        router.push(`/loc-phim?${string}`);
    };
    return (
        <div onClick={handleFilter} className="mx-auto text-sm text-black cursor-pointer my-4 p-2 px-3 rounded bg-mainColor/90 hover:bg-mainColor">
            Lọc phim
        </div>
    );
};

export default FilterButton;
