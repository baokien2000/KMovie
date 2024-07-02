import MovieListTitle from "@/components/movies/list/movie-list-title";
import SearchNotFound from "@/components/not-found/search-not-found";
import { getKMovie } from "@/services/movies";
import React, { Suspense } from "react";
import { pageSize } from "@/enum/movies";
import MovieListSkeleton from "@/components/movies/list/movie-list-skeleton";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
export async function generateMetadata({ searchParams }: { searchParams?: { [key: string]: string | undefined } }): Promise<Metadata> {
    const key = searchParams?.key;
    return {
        title: `Tìm kiếm theo từ khóa ${key ?? ""}`,
    };
}
export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const searchMovies = await getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, searchParams?.key);
    if (!searchMovies || !searchParams?.key) return <SearchNotFound />;
    return (
        <main className="md:p-6 sm:p-3 py-3  space-y-3  ">
            <MovieListTitle id="SearchListTitle" title={<>Tìm kiếm theo từ khóa {<b className="text-mainColor">{searchParams?.key}</b>}</>} />
            <Suspense fallback={<MovieListSkeleton />}>
                {!searchMovies && searchMovies?.items?.length === 0 ? (
                    <SearchNotFound />
                ) : (
                    <MovieListContainer titleId="SearchListTitle" initialData={searchMovies} searchParams={searchParams} />
                )}
            </Suspense>
        </main>
    );
}
