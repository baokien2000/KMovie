"use client";
import React from "react";
import SearchMovieSkeleton from "./search-skeleton";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
const SearchMovieDropdown = dynamic(() => import("./search-movie-dropdown"), {
    ssr: false,
    loading: () => <SearchMovieSkeleton />,
});
const SearchMovie = dynamic(() => import("./search-movie"), {
    ssr: false,
    loading: () => <SearchMovieSkeleton />,
});
const SearchContainer = () => {
    const pathName = usePathname();
    return pathName === "/tim-kiem" ? <SearchMovie /> : <SearchMovieDropdown />;
};

export default SearchContainer;
