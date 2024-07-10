import React from "react";

import { getKMovie, getRecommendedMovies } from "@/services/movies";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { pageSize } from "@/enum/movies";

export default async function HomeContainer({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const initialData = await getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, "");
    return <MovieListContainer titleId="MovieListTitle" initialData={initialData} searchParams={searchParams} />;
}
