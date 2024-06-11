import React from "react";
import MovieListTitle from "../../components/movies/movie-list-title";
import dynamic from "next/dynamic";
import RecommendedMoviesSkeleton from "./recommended-movies-skeleton";
import { ImovieList } from "@/interface/movies";
const MovieSlider = dynamic(() => import("../../components/movies/slider"), {
    ssr: false,
    loading: () => <RecommendedMoviesSkeleton />,
});
const RecommendedMovies = async ({ movies }: { movies: ImovieList }) => {
    if (!movies) return null;
    return (
        <div className="space-y-1 ">
            <MovieListTitle title="Phim đề xuất" />
            <MovieSlider movies={movies} />
        </div>
    );
};

export default RecommendedMovies;
