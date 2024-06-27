import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getYearMovies } from "@/services/movies";
import React, { Suspense } from "react";
import { pageSize, years } from "@/enum/movies";
import Loading from "../../theo-doi/loading";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
export async function generateMetadata({ params }: { params: { year: string } }): Promise<Metadata> {
    const year = years.includes(params?.year);
    return {
        title: year ? `Phim ${params?.year} - kmovies` : "404 - kmovies",
    };
}

export async function generateStaticParams() {
    return years.map((year) => ({
        year: year,
    }));
}
export default async function Page({ searchParams, params }: { searchParams?: { [key: string]: string | undefined }; params: { year: string } }) {
    const isYearValid = years.includes(params?.year);
    if (!isYearValid) return <div>Không tìm thấy</div>;

    const yearMovie = await getYearMovies(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, params?.year);
    if (!yearMovie) return <div>Không tìm thấy</div>;
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="YearListTitle" title={`Phim năm ${params?.year ?? ""}`} />
            <Suspense fallback={<Loading />}>
                <MovieListContainer titleId="YearListTitle" initialData={yearMovie} searchParams={searchParams} />
            </Suspense>
        </main>
    );
}
