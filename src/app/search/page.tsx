import MovieListTitle from "@/components/movies/movie-list-title";
import MoviePagination from "@/components/movies/movie-pagination";
import SearchMovies from "@/containers/search/search-movie";
import SearchNotFound from "@/containers/search/search-not-found";
import { getKMovie } from "@/services/movies";
import React from "react";

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const searchMovies = await getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, searchParams?.name);
    // console.log("searchMovies", searchMovies);
    if (!searchMovies || !searchParams?.name) return <SearchNotFound />;
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle title={<>Tìm kiếm theo từ khóa {<b className="text-mainColor">{searchParams?.name}</b>}</>} />
            {searchMovies?.items?.length === 0 ? (
                <SearchNotFound keyword={searchParams?.name} />
            ) : (
                <SearchMovies initialData={searchMovies} searchParams={searchParams} />
            )}
        </main>
    );
}
