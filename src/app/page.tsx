import MovieListTitle from "@/components/movies/movie-list-title";
import NewMovies from "@/containers/home/new-movies";
import { getKMovie } from "@/services/movies";
import { Suspense } from "react";
import Loading from "./loc-phim/loading";
import nextDynamic from "next/dynamic";

export const dynamic = "force-dynamic";
import RecommendedMoviesSkeleton from "@/containers/home/recommended-movies-skeleton";
const MovieSlider = nextDynamic(() => import("@/components/movies/slider"), {
    ssr: false,
    loading: () => <RecommendedMoviesSkeleton />,
});
export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    const [initialData, recommended] = await Promise.all([
        getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, ""),
        getKMovie(1, 10, ""),
    ]);
    return (
        <main className="p-6  ">
            <div className="space-y-1 ">
                <MovieListTitle title="Phim đề xuất" />
                <Suspense fallback={<RecommendedMoviesSkeleton />}>
                    <MovieSlider movies={recommended} />
                </Suspense>
            </div>

            <div className="space-y-3 ">
                <MovieListTitle id={"MovieListTitle"} title="Phim mới cập nhật" />
                <Suspense fallback={<Loading />}>
                    <NewMovies initialData={initialData} searchParams={searchParams} />
                </Suspense>
            </div>
        </main>
    );
}
