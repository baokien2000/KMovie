import React from "react";
import MovieCardSkeleton from "../../components/movies/card/movie-card-skeleton";

const NewMovieSkeleton = () => {
    return (
        <div className={" p-[10px] grid grid-cols-5  gap-x-[10px] rounded-[8px]  w-full bg-[#404040]"}>
            {Array.from({ length: 25 }).map((movie, index) => {
                return <MovieCardSkeleton key={index} className=" h-60 md:h-80" />;
            })}
        </div>
    );
};

export default NewMovieSkeleton;
