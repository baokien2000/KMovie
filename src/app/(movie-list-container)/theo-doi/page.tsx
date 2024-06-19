import MovieListTitle from "@/components/movies/list/movie-list-title";
import BookmarkMovies from "@/containers/bookmark-page/bookmark-movie";

export default async function Page({ searchParams }: { searchParams?: { [key: string]: string | undefined } }) {
    return (
        <main className="p-6 space-y-4  ">
            <MovieListTitle id="BookmarkListTitle" title={"Phim theo dõi"} />
            <BookmarkMovies searchParams={searchParams} page={searchParams?.page ? parseInt(searchParams?.page ?? "1") : 1} />
        </main>
    );
}
