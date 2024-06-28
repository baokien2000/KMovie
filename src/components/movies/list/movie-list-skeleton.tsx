import React from "react";
import MovieCardSkeleton from "../card/movie-card-skeleton";

const MovieListSkeleton = () => {
    return (
        <div className={" p-[10px] grid sm:grid-cols-6 grid-cols-2 gap-2 sm:gap-[10px] rounded  w-full bg-[#404040]"}>
            {Array.from({ length: 24 }).map((movie, index) => {
                return <MovieCardSkeleton key={index} className=" h-60 md:h-72" />;
            })}
        </div>
    );
};

export default MovieListSkeleton;
