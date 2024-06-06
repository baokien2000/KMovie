import React from "react";
import MovieListTitle from "../../components/movies/movie-list-title";
import { getKMovie } from "@/services/movies";
import dynamic from "next/dynamic";
import RecommendedMoviesSkeleton from "./recommended-movies-skeleton";
const MovieSlider = dynamic(() => import("../../components/movies/slider"), {
    ssr: false,
    loading: () => <RecommendedMoviesSkeleton />,
});
const RecommendedMovies = async () => {
    const movies = await getKMovie(1, 10, "");
    if (!movies) return null;
    return (
        <div className="space-y-1 ">
            <MovieListTitle title="Phim đề xuất" />
            <MovieSlider movies={movies} />
        </div>
    );
};

export default RecommendedMovies;
