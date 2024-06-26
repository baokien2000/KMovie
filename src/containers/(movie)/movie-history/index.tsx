"use client";
import Loading from "@/app/(movie-list-container)/theo-doi/loading";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { pageSize } from "@/enum/movies";
import { getHistoryKMovie } from "@/services/movies";
import { useAuthStore } from "@/store/auth/auth.store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
interface MovieHistoryProps {
    searchParams?: { [key: string]: string | undefined };
}
const MovieHistory = ({ searchParams }: MovieHistoryProps) => {
    const user = useAuthStore((state) => state.user);
    const { data: historyMovies, isFetching } = useQuery({
        queryKey: ["viewed-movie", user?._id],
        queryFn: async () => getHistoryKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, user?._id ?? ""),
        refetchOnWindowFocus: false,
        enabled: (user?._id?.length ?? 0) > 0,
    });

    if (!historyMovies) return <div>Bạn chưa xem bộ phim nào</div>;
    return isFetching ? <Loading /> : <MovieListContainer titleId="HistoryListTitle" initialData={historyMovies} searchParams={searchParams} />;
};

export default MovieHistory;
