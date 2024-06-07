import MovieListTitle from "@/components/movies/movie-list-title";
import NewMovies from "@/containers/home/new-movies";
import RecommendedMovies from "@/containers/home/recommended-movies";
import { getKMovie } from "@/services/movies";
// export const dynamic = process.env.NEXT_PUBLIC_MODE === "development" ? "auto" : "force-dynamic";
export const dynamic = "force-dynamic";

export default async function Page({ params, searchParams }: { params: { slug: string }; searchParams?: { [key: string]: string | undefined } }) {
    console.count("movies");
    const [initialData, recommended] = await Promise.all([
        getKMovie(searchParams?.page ? parseInt(searchParams.page) : 1, 20, ""),
        getKMovie(1, 10, ""),
    ]);
    return (
        <main className="p-6  ">
            <RecommendedMovies movies={recommended} />
            <div className="space-y-3 ">
                <MovieListTitle id={"MovieListTitle"} title="Phim mới cập nhật" />
                <NewMovies initialData={initialData} searchParams={searchParams} />
            </div>
        </main>
    );
}
