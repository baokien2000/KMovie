import React from "react";
import MovieCard from "./movie-card";
import { ImovieList } from "@/interface/movies";
interface MovieListProp {
    movies: ImovieList;
}
const MoviesList = ({ movies }: MovieListProp) => {
    if (!movies.items) return null;
    return (
        <div className={" p-[10px] grid grid-cols-5  gap-x-[10px] rounded-[8px]  w-full bg-[#404040]"}>
            {movies.items.map((movie, index) => {
                return <MovieCard key={movie._id} movie={movie} ImagePath={movies.pathImage} className="w-full h-60 md:h-80" />;
            })}
        </div>
    );
};

export default MoviesList;
