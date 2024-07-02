import MovieListTitle from "@/components/movies/list/movie-list-title";
import { getKMovie } from "@/services/movies";
import { Suspense } from "react";
import nextDynamic from "next/dynamic";
import { pageSize } from "@/enum/movies";
import MovieListSkeleton from "@/components/movies/list/movie-list-skeleton";
import MoviesSliderSkeleton from "@/components/movies/slider/movies-slider-skeleton";
import MovieListContainer from "@/components/movies/list/movie-list-container";

export const dynamic = "force-dynamic";
const MovieSlider = nextDynamic(() => import("@/components/movies/slider/slider"), {
    ssr: false,
    loading: () => <MoviesSliderSkeleton />,
});
export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const [initialData, recommended] = await Promise.all([
        getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, ""),
        getKMovie(1, 10, ""),
    ]);
    return (
        <main className="md:p-6 sm:p-3 py-3  ">
            <div className="space-y-3 ">
                <MovieListTitle title="Phim đề xuất" />
                <MovieSlider movies={recommended} />
            </div>

            <div className="space-y-3 ">
                <MovieListTitle id={"MovieListTitle"} title="Phim mới cập nhật" />
                <Suspense fallback={<MovieListSkeleton />}>
                    <MovieListContainer titleId="MovieListTitle" initialData={initialData} searchParams={searchParams} />
                </Suspense>
            </div>
        </main>
    );
}
