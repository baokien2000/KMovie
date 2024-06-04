import React from "react";
import MovieCardSkeleton from "../movies/movie-card-skeleton";

const RecommendedMoviesSkeleton = () => {
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

export default RecommendedMoviesSkeleton;
