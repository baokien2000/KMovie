"use client";
import React, { useEffect, useState } from "react";
import YearFilter from "./year-filter";
import CategoryFilter from "./category-filter";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { cn } from "@/lib/cn";
import { MovieFilterName } from "@/interface/movie-filter";
import TypeFilter from "./type-filter";
import StatusFilter from "./status-filter";
import FilterButton from "./filter-button";
import Sort from "./sort";
import { useSearchParams } from "next/navigation";
import CountryFilter from "./country-filter";
import { useFilterStore } from "@/store/movies/filter.store";

type TFilter = "category" | "year" | "type" | "status" | "country" | "sort";
const Type: TFilter[] = ["category", "year", "type", "status", "country", "sort"];
const MovieFilter = () => {
    const [selectedFilter, setSelectedFilter] = useState<TFilter[]>([]);
    const searhParams = useSearchParams();
    useEffect(() => {
        let arr = [];
        if (searhParams.has("categories")) arr.push("category");
        if (searhParams.has("year")) arr.push("year");
        if (searhParams.has("type")) arr.push("type");
        if (searhParams.has("status")) arr.push("status");
        if (searhParams.has("country")) arr.push("country");
        if (searhParams.has("sort")) arr.push("sort");
        setSelectedFilter(arr as TFilter[]);
    }, [searhParams]);
    const handleSelectFilter = (type: TFilter) => {
        if (selectedFilter.includes(type)) {
            setSelectedFilter(selectedFilter.filter((filter) => filter !== type));
        } else {
            setSelectedFilter([...selectedFilter, type]);
        }
    };
    return (
        <div className="w-full h-fit min-h-10 border bg-dark4 border-des flex flex-col text-dark3 ">
            <div className={cn("flex justify-between text-sm", selectedFilter.length > 0 ? "border-b-2 border-mainColor" : "")}>
                {Type.map((type) => {
                    const active = selectedFilter.includes(type);
                    return (
                        <button
                            key={type}
                            onClick={() => handleSelectFilter(type)}
                            className={cn("h-10 justify-center w-full gap-1 flex items-center", active ? "bg-mainColor text-black" : "")}
                        >
                            <span>{MovieFilterName.get(type)}</span>
                            {active ? <ChevronDownIcon className="h-5 w-5" /> : <ChevronRightIcon className="h-5 w-5" />}
                        </button>
                    );
                })}
            </div>
            <div>{selectedFilter.map((filter) => renderFilterComponent(filter))}</div>
            {selectedFilter.length > 0 && <FilterButton />}
        </div>
    );
};

export default MovieFilter;

const renderFilterComponent = (type: TFilter) => {
    switch (type) {
        case "category":
            return <CategoryFilter key={"CategoryFilter"} />;
        case "year":
            return <YearFilter key={"YearFilter"} />;
        case "type":
            return <TypeFilter key={"TypeFilter"} />;
        case "status":
            return <StatusFilter key={"StatusFilter"} />;
        case "country":
            return <CountryFilter key={"CountryFilter"} />;
        case "sort":
            return <Sort key={"Sort"} />;
        default:
            return null;
    }
};
