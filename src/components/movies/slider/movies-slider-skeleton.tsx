import React from "react";
import MovieCardSkeleton from "../card/movie-card-skeleton";

const MoviesSliderSkeleton = () => {
    return (
        <div className="flex gap-4 w-full pb-5">
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
            <MovieCardSkeleton />
        </div>
    );
};

export default MoviesSliderSkeleton;
