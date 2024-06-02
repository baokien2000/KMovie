import React from "react";
import MovieListTitle from "../movies/movie-list-title";
import MovieSlider from "../movies/slider";
import { getKMovie } from "@/services/movies";

const RecommendedMovies = async () => {
    const movies = await getKMovie(1, 10, "");
    return (
        <div className="space-y-1 ">
            <MovieListTitle title="Phim đề xuất" />
            <MovieSlider movies={movies} />
        </div>
    );
};

export default RecommendedMovies;
