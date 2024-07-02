import React from "react";
import MovieCardSkeleton from "../card/movie-card-skeleton";

const MoviesSliderSkeleton = () => {
    return (
        <div className="flex gap-1 sm:gap-2 w-full pb-5">
            <MovieCardSkeleton />
            <MovieCardSkeleton className="hidden min-[320px]:block " />
            <MovieCardSkeleton className="hidden min-[500px]:block" />
            <MovieCardSkeleton className="hidden sm:block" />
            <MovieCardSkeleton className="hidden md:block" />
            <MovieCardSkeleton className="hidden laptopSmall:block" />
        </div>
    );
};

export default MoviesSliderSkeleton;
