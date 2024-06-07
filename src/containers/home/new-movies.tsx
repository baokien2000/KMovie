"use client";
import React from "react";
import { getKMovie } from "@/services/movies";
import MoviesList from "../../components/movies/movies-list";
import { useQuery } from "@tanstack/react-query";
import NewMovieSkeleton from "./new-movie-skeleton";
import MoviePagination from "@/components/movies/movie-pagination";
import { ImovieList } from "@/interface/movies";

const NewMovies = ({ searchParams, initialData }: { searchParams?: { [key: string]: string | undefined }; initialData: ImovieList }) => {
    const { data: movies, isFetching } = useQuery({
        queryKey: ["getMoviesPerPage", searchParams?.page],
        queryFn: async () => getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, ""),
        refetchOnWindowFocus: false,
        initialData: initialData,
        enabled: searchParams?.page !== undefined && searchParams?.page !== null,
    });
    return !isFetching ? (
        <>
            <MoviesList movies={movies} />
            <MoviePagination totalPage={Math.ceil(movies?.pagination?.totalPages ?? 0)} />
        </>
    ) : (
        <NewMovieSkeleton />
    );
};

export default NewMovies;
