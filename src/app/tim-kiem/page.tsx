import MovieListTitle from "@/components/movies/movie-list-title";
import SearchMovies from "@/containers/search-page/search-movie";
import React from "react";

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {

    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="SearchListTitle" title={<>Tìm kiếm theo từ khóa {<b className="text-mainColor">{searchParams?.name}</b>}</>} />
            <SearchMovies  searchParams={searchParams} />
        </main>
    );
}
