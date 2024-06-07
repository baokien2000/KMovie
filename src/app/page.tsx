import NewMovies from "@/containers/home/new-movies";
import RecommendedMovies from "@/containers/home/recommended-movies";

export default async function Home({ params, searchParams }: { params: { slug: string }; searchParams?: { [key: string]: string | undefined } }) {
    console.count("movies");
    return (
        <main className="p-6  ">
            <RecommendedMovies />
            <NewMovies searchParams={searchParams} />
        </main>
    );
}
