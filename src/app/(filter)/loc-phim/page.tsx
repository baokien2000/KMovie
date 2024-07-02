import MovieListTitle from "@/components/movies/list/movie-list-title";
import FilterNotFound from "@/containers/filter-page/filter-not-found";
import MovieFilter from "@/containers/filter-page/movie-filter";
import { getFilterMovie } from "@/services/movies";
import React, { Suspense } from "react";
import { pageSize } from "@/enum/movies";
import MovieListSkeleton from "@/components/movies/list/movie-list-skeleton";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
export async function generateMetadata({ searchParams }: { searchParams?: { [key: string]: string | undefined } }): Promise<Metadata> {
    return {
        title: `Trang lọc phim`,
    };
}

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const filterMovies = await getFilterMovie(
        searchParams?.page ? parseInt(searchParams.page) : 1,
        pageSize,
        searchParams?.sort,
        searchParams?.type,
        searchParams?.year,
        searchParams?.categories,
        searchParams?.status,
        searchParams?.country
    );
    return (
        <main className="md:p-6 sm:p-3 py-3  space-y-3  ">
            <MovieListTitle id="FilterListTitle" title={"Trang lọc phim"} />
            <MovieFilter />
            <Suspense fallback={<MovieListSkeleton />}>
                {!filterMovies && filterMovies?.items?.length === 0 ? (
                    <FilterNotFound />
                ) : (
                    <MovieListContainer titleId="FilterListTitle" initialData={filterMovies} searchParams={searchParams} />
                )}
            </Suspense>
        </main>
    );
}
