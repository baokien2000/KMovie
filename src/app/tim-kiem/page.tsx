import MovieListTitle from "@/components/movies/movie-list-title";
import SearchMovies from "@/containers/search-page/search-movie";
import SearchNotFound from "@/containers/search-page/search-not-found";
import { getKMovie } from "@/services/movies";
import React from "react";

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const searchMovies = await getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, searchParams?.name);
    if (!searchMovies || !searchParams?.name) return <SearchNotFound />;
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="SearchListTitle" title={<>Tìm kiếm theo từ khóa {<b className="text-mainColor">{searchParams?.name}</b>}</>} />
            {searchMovies?.items?.length === 0 ? (
                <SearchNotFound keyword={searchParams?.name} />
            ) : (
                <SearchMovies initialData={searchMovies} searchParams={searchParams} />
            )}
        </main>
    );
}
