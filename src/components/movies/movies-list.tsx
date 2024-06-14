import React from "react";
import MovieCard from "./movie-card";
import { ImovieList } from "@/interface/movies";
interface MovieListProp {
    movies: ImovieList;
    enableBlur?: boolean;
    quality?: number;
}
const MoviesList = ({ movies, enableBlur = false, quality }: MovieListProp) => {
    if (!movies?.items) return null;
    return (
        <div className={" p-[10px] grid grid-cols-5  gap-x-[10px] rounded  w-full bg-[#404040]"}>
            {movies.items.map((movie, index) => {
                return (
                    <MovieCard
                        quality={quality}
                        enableBlur={enableBlur}
                        key={movie._id}
                        movie={movie}
                        ImagePath={movies.pathImage}
                        className="w-full h-60 md:h-80"
                    />
                );
            })}
        </div>
    );
};

export default MoviesList;
