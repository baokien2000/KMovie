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
        <div className={" sm:p-[10px] p-2 grid sm:grid-cols-6 grid-cols-2 gap-2  sm:gap-[10px] rounded  w-full bg-[#404040]"}>
            {movies.items.map((movie, index) => {
                return (
                    <MovieCard
                        quality={quality}
                        enableBlur={enableBlur}
                        key={movie._id}
                        movie={movie}
                        ImagePath={movies.pathImage}
                        className="w-full h-60 md:h-72 m-0"
                    />
                );
            })}
        </div>
    );
};

export default MoviesList;
