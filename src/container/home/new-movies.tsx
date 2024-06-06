"use client";
import React from "react";
import MovieListTitle from "../../components/movies/movie-list-title";
import { getKMovie } from "@/services/movies";
import MoviesList from "../../components/movies/movies-list";
import MoviePagination from "../../components/movies/movie-pagination";
import { useQuery } from "@tanstack/react-query";
import NewMovieSkeleton from "./new-movie-skeleton";

const NewMovies = ({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) => {
    const { data: movies, isFetching } = useQuery({
        queryKey: ["getMoviesPerPage", searchParams?.page],
        queryFn: async () => getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, ""),
        refetchOnWindowFocus: false,
    });
    console.log("isFetching", isFetching);
    console.log("movies", movies);
    return (
        <div className="space-y-3 ">
            <MovieListTitle id={"MovieListTitle"} title="Phim mới cập nhật" />
            {!isFetching ? (
                <>
                    <MoviesList movies={movies} />
                    <MoviePagination totalPage={Math.ceil(movies?.pagination?.totalPages ?? 0)} />
                </>
            ) : (
                <NewMovieSkeleton />
            )}
        </div>
    );
};

export default NewMovies;
