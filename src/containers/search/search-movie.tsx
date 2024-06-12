"use client";
import React from "react";
import { getKMovie } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";
import MoviePagination from "@/components/movies/movie-pagination";
import { ImovieList } from "@/interface/movies";
import NewMovieSkeleton from "../home/new-movie-skeleton";
import MoviesList from "@/components/movies/movies-list";

const SearchMovies = ({ searchParams, initialData }: { searchParams?: { [key: string]: string | undefined }; initialData: ImovieList }) => {
    const { data: movies, isFetching } = useQuery({
        queryKey: ["getMoviesSearch", searchParams?.page, searchParams?.name],
        queryFn: async () => getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, searchParams?.name),
        refetchOnWindowFocus: false,
        initialData: initialData,
        enabled: searchParams?.page !== undefined && searchParams?.page !== null && searchParams?.name !== undefined && searchParams?.name !== null,
    });
    console.log("data", movies);
    return !isFetching ? (
        <>
            <MoviesList movies={movies} />
            <MoviePagination totalPage={Math.ceil(movies?.pagination?.totalPages ?? 0)} />
        </>
    ) : (
        <NewMovieSkeleton />
    );
};

export default SearchMovies;
