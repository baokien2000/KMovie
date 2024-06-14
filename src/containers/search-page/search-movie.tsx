"use client";
import React, { useEffect } from "react";
import MoviePagination from "@/components/movies/movie-pagination";
import { ImovieList } from "@/interface/movies";
import NewMovieSkeleton from "../home/new-movie-skeleton";
import MoviesList from "@/components/movies/movies-list";
import { createQueryString } from "@/utils/format-string";
import { usePathname, useRouter } from "next/navigation";
import { scrollToTitleId } from "@/utils/scroll";

const SearchMovies = ({ searchParams, initialData }: { searchParams?: { [key: string]: string | undefined }; initialData: ImovieList }) => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();
    useEffect(() => {
        setLoading(false);
    }, [initialData?.pagination?.currentPage]);
    const handlePageClick = (data: { selected: number }) => {
        const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());
        scrollToTitleId("SearchListTitle");
        router.replace(`${pathname}?${queryString}`, { scroll: false });
    };
    return loading ? (
        <NewMovieSkeleton />
    ) : (
        <>
            <MoviesList quality={50} enableBlur movies={initialData} />
            <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(initialData?.pagination?.totalPages ?? 0)} />
        </>
    );
};

export default SearchMovies;
