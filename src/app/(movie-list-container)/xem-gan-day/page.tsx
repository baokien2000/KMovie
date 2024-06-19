import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getHistoryKMovie, getKMovie } from "@/services/movies";
import React, { Suspense } from "react";
import { pageSize } from "@/enum/movies";
import Loading from "../theo-doi/loading";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Phim xem gần đây - kmovies`,
    };
}
export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const historyMovies = await getHistoryKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, "66715fb6a1d2d291a9c17d20");
    if (!historyMovies) return <div>Bạn chưa xem bộ phim nào</div>;
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="HistoryListTitle" title={"Xem gần đây"} />
            <Suspense fallback={<Loading />}>
                <MovieListContainer titleId="HistoryListTitle" initialData={historyMovies} searchParams={searchParams} />
            </Suspense>
        </main>
    );
}
