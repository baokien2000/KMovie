import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getCountryMovies } from "@/services/movies";
import React, { Suspense } from "react";
import { countriesMap, countriesSlug, pageSize } from "@/enum/movies";
import Loading from "../../theo-doi/loading";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { Metadata } from "next";
export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
    const country = countriesMap.get(params?.country);
    return {
        title: country ? `Phim ${country}` : "404",
    };
}

export async function generateStaticParams() {
    return countriesSlug.map((country) => ({
        country: country,
    }));
}
export default async function Page({ searchParams, params }: { searchParams?: { [key: string]: string | undefined }; params: { country: string } }) {
    const isCountryValid = countriesMap.get(params?.country);

    if (!isCountryValid) return <div>Không tìm thấy</div>;
    const countryMovie = await getCountryMovies(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, params?.country);
    if (!countryMovie) return <div>Không tìm thấy</div>;
    return (
        <main className="md:p-6 sm:p-3 py-3  space-y-3  ">
            <MovieListTitle id="CountryListTitle" title={"Phim " + countriesMap.get(params?.country) ?? ""} />
            <Suspense fallback={<Loading />}>
                <MovieListContainer titleId="CountryListTitle" initialData={countryMovie} searchParams={searchParams} />
            </Suspense>
        </main>
    );
}
