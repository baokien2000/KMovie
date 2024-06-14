"use client";
import React from "react";
import { getKMovie } from "@/services/movies";
import MoviesList from "../../components/movies/movies-list";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import NewMovieSkeleton from "./new-movie-skeleton";
import MoviePagination from "@/components/movies/movie-pagination";
import { ImovieList } from "@/interface/movies";
import { createQueryString } from "@/utils/format-string";
import { usePathname, useRouter } from "next/navigation";
import { scrollToTitleId } from "@/utils/scroll";

const NewMovies = ({ searchParams, initialData }: { searchParams?: { [key: string]: string | undefined }; initialData: ImovieList }) => {
    const queryClient = useQueryClient();
    const router = useRouter();
    const pathname = usePathname();

    const { data: movies, isFetching } = useQuery({
        queryKey: ["getMoviesPerPage", searchParams?.page],
        queryFn: async () => getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, ""),
        refetchOnWindowFocus: false,
        initialData: initialData,
        enabled: searchParams?.page !== undefined && searchParams?.page !== null,
    });
    const handlePageClick = (data: { selected: number }) => {
        const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());
        queryClient.invalidateQueries({
            queryKey: ["getMoviesPerPage", data.selected + 1],
        });
        scrollToTitleId("MovieListTitle");
        router.replace(`${pathname}?${queryString}`, { scroll: false });
    };
    return !isFetching ? (
        <>
            <MoviesList movies={movies} />
            <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(movies?.pagination?.totalPages ?? 0)} />
        </>
    ) : (
        <NewMovieSkeleton />
    );
};

export default NewMovies;
