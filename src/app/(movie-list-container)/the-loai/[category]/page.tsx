import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getCategoryMovies } from "@/services/movies";
import React, { Suspense } from "react";
import { categoriesMap, pageSize } from "@/enum/movies";
import Loading from "../../theo-doi/loading";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
    const category = categoriesMap.get(params?.category);
    return {
        title: category ? `Phim ${category} - kmovies` : "404 - kmovies",
    };
}
export default async function Page({ searchParams, params }: { searchParams?: { [key: string]: string | undefined }; params: { category: string } }) {
    const isCategoryValid = categoriesMap.get(params?.category);
    if (!isCategoryValid) return <div>Không tìm thấy</div>;

    const categoryMovie = await getCategoryMovies(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, params?.category);
    if (!categoryMovie) return <div>Không tìm thấy</div>;
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="CategoryListTitle" title={"Phim " + categoriesMap.get(params?.category) ?? ""} />
            <Suspense fallback={<Loading />}>
                <MovieListContainer titleId="CategoryListTitle" initialData={categoryMovie} searchParams={searchParams} />
            </Suspense>
        </main>
    );
}
