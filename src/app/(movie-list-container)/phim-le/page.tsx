import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getTypeMovies } from "@/services/movies";
import React, { Suspense } from "react";
import { pageSize, years } from "@/enum/movies";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
import Loading from "../theo-doi/loading";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Phim lẻ`,
    };
}

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const seriesMovie = await getTypeMovies(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, "single");
    if (!seriesMovie) return <div>Không tìm thấy</div>;
    return (
        <main className="md:p-6 sm:p-3 py-3  space-y-3  ">
            <MovieListTitle id="TypeListTitle" title={`Phim lẻ`} />
            <Suspense fallback={<Loading />}>
                <MovieListContainer titleId="TypeListTitle" initialData={seriesMovie} searchParams={searchParams} />
            </Suspense>
        </main>
    );
}
