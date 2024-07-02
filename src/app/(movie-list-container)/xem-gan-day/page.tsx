import MovieListTitle from "@/components/movies/list/movie-list-title";
import React from "react";
import { Metadata } from "next";
import MovieHistory from "@/containers/(movie)/movie-history";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Phim xem gần đây`,
    };
}
export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    return (
        <main className="md:p-6 sm:p-3 py-3 space-y-3  ">
            <MovieListTitle id="HistoryListTitle" title={"Xem gần đây"} />
            <MovieHistory searchParams={searchParams} />
        </main>
    );
}
