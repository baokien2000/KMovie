import MovieListTitle from "@/components/movies/list/movie-list-title";
import BookmarkMovies from "@/containers/bookmark-page/bookmark-movie";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Phim đã theo dõi`,
    };
}

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    return (
        <main className="md:p-6 sm:p-3 py-3  space-y-3  ">
            <MovieListTitle id="BookmarkListTitle" title={"Phim đã theo dõi"} />
            <BookmarkMovies searchParams={searchParams} />
        </main>
    );
}
