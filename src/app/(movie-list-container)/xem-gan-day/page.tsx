import MovieListTitle from "@/components/movies/list/movie-list-title";
import React from "react";
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
