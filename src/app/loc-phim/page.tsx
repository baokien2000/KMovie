import MovieListTitle from "@/components/movies/list/movie-list-title";
import FilterMovies from "@/containers/filter-page/filter-movies";
import FilterNotFound from "@/containers/filter-page/filter-not-found";
import MovieFilter from "@/containers/filter-page/movie-filter";
import { getFilterMovie } from "@/services/movies";
import React, { Suspense } from "react";
import Loading from "./loading";
import { pageSize } from "@/enum/movies";

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
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="FilterListTitle" title={"Trang lọc phim"} />
            <MovieFilter />
            <Suspense fallback={<Loading />}>
                {!filterMovies && filterMovies?.items?.length === 0 ? (
                    <FilterNotFound />
                ) : (
                    <FilterMovies initialData={filterMovies} searchParams={searchParams} />
                )}
            </Suspense>
        </main>
    );
}
