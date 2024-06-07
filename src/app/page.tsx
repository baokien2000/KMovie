import MovieListTitle from "@/components/movies/movie-list-title";
import NewMovies from "@/containers/home/new-movies";
import RecommendedMovies from "@/containers/home/recommended-movies";
// export const dynamic = process.env.NEXT_PUBLIC_MODE === "development" ? "auto" : "force-dynamic";
export const dynamic = "force-dynamic";

export default async function Home({ params, searchParams }: { params: { slug: string }; searchParams?: { [key: string]: string | undefined } }) {
    console.count("movies");
    return (
        <main className="p-6  ">
            <RecommendedMovies />
            <div className="space-y-3 ">
                <MovieListTitle id={"MovieListTitle"} title="Phim mới cập nhật" />
                <NewMovies searchParams={searchParams} />
            </div>
        </main>
    );
}
