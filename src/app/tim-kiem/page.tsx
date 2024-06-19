import MovieListTitle from "@/components/movies/list/movie-list-title";
import SearchMovies from "@/containers/search-page/search-movie";
import SearchNotFound from "@/containers/search-page/search-not-found";
import { getKMovie } from "@/services/movies";
import React, { Suspense } from "react";
import Loading from "../loc-phim/loading";
import { pageSize } from "@/enum/movies";

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const searchMovies = await getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, searchParams?.name);
    if (!searchMovies || !searchParams?.name) return <SearchNotFound />;
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="SearchListTitle" title={<>Tìm kiếm theo từ khóa {<b className="text-mainColor">{searchParams?.name}</b>}</>} />
            <Suspense fallback={<Loading />}>
                {!searchMovies && searchMovies?.items?.length === 0 ? (
                    <SearchNotFound />
                ) : (
                    <SearchMovies initialData={searchMovies} searchParams={searchParams} />
                )}
            </Suspense>
        </main>
    );
}
