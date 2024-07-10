import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getTypeMovies } from "@/services/movies";
import React, { Suspense } from "react";
import { pageSize, years } from "@/enum/movies";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
import Loading from "../theo-doi/loading";
export const revalidate = 3600;
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Phim bộ`,
    };
}

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const singleMovie = await getTypeMovies(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, "series");
    if (!singleMovie) return <div>Không tìm thấy</div>;
    return (
        <main className="md:p-6 sm:p-3 py-3  space-y-3  ">
            <MovieListTitle id="TypeListTitle" title={`Phim bộ`} />
            <Suspense fallback={<Loading />}>
                <MovieListContainer titleId="TypeListTitle" initialData={singleMovie} searchParams={searchParams} />
            </Suspense>
        </main>
    );
}
