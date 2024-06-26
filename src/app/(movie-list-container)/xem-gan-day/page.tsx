import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getHistoryKMovie, getKMovie } from "@/services/movies";
import React, { Suspense } from "react";
import { pageSize } from "@/enum/movies";
import Loading from "../theo-doi/loading";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
import MovieHistory from "@/containers/(movie)/movie-history";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Phim xem gần đây - kmovies`,
    };
}
export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="HistoryListTitle" title={"Xem gần đây"} />
            <MovieHistory searchParams={searchParams} />
        </main>
    );
}
