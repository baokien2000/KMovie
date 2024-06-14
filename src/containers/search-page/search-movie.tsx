"use client";
import React from "react";
import { getKMovie } from "@/services/movies";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import MoviePagination from "@/components/movies/movie-pagination";
import NewMovieSkeleton from "../home/new-movie-skeleton";
import MoviesList from "@/components/movies/movies-list";
import { createQueryString } from "@/utils/format-string";
import { usePathname, useRouter } from "next/navigation";
import { scrollToTitleId } from "@/utils/scroll";

const SearchMovies = ({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const pathname = usePathname();

    const { data: movies, isFetching } = useQuery({
        queryKey: ["getMoviesSearch", searchParams?.page, searchParams?.name],
        queryFn: async () => getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, searchParams?.name),
        refetchOnWindowFocus: false,
    });

    const handlePageClick = (data: { selected: number }) => {
        const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());
        queryClient.invalidateQueries({
            queryKey: ["getMoviesSearch", data.selected + 1, searchParams?.name],
        });
        router.replace(`${pathname}?${queryString}`, { scroll: false });
        scrollToTitleId("SearchListTitle");
    };
    return !isFetching ? (
        <>
            <MoviesList quality={50} enableBlur movies={movies} />
            <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(movies?.pagination?.totalPages ?? 0)} />
        </>
    ) : (
        <NewMovieSkeleton />
    );
};

export default SearchMovies;
