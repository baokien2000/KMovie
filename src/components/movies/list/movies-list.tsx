import React from "react";
import MovieCard from "../card/movie-card";
import { ImovieList } from "@/interface/movies";
interface MovieListProp {
    movies: ImovieList;
    enableBlur?: boolean;
    quality?: number;
}
const MoviesList = ({ movies, enableBlur = false, quality }: MovieListProp) => {
    if (!movies?.items) return null;

    return (
        <div
            className={
                " sm:p-2 p-1 grid  grid-cols-1   min-[320px]:grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 laptopSmall:grid-cols-6  gap-1 laptopSmall:gap-2  rounded  w-full bg-[#404040]"
            }
        >
            {movies.items.map((movie, index) => {
                return <MovieCard quality={quality} enableBlur={enableBlur} key={movie._id} movie={movie} ImagePath={movies.pathImage} />;
            })}
        </div>
    );
};

export default MoviesList;
