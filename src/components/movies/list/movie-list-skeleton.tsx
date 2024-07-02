import React from "react";
import MovieCardSkeleton from "../card/movie-card-skeleton";

const MovieListSkeleton = () => {
    return (
        <div
            className={
                " p-2 grid  grid-cols-1   min-[320px]:grid-cols-2 min-[550px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 laptopSmall:grid-cols-6    gap-1  sm:gap-2  rounded  w-full bg-[#404040]"
            }
        >
            {Array.from({ length: 24 }).map((movie, index) => {
                return <MovieCardSkeleton key={index} />;
            })}
        </div>
    );
};

export default MovieListSkeleton;
