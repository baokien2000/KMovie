import { getMovieBySlug } from "@/services/movies";
import React from "react";
import MovieTiltle from "@/containers/movie-watch/movie-tiltle";
import MovieServer from "@/containers/movie-watch/movie-server";
import EpisodesList from "@/containers/movie-watch/movie-episodes";
import CommentList from "@/containers/movie-comment";
import { Metadata } from "next";

interface PageProps {
    params: {
        slug: string;
        episode: string;
    };
}
export async function generateMetadata({
    params,
}: {
    params: {
        slug: string;
        episode: string;
    };
}): Promise<Metadata> {
    const slug = params.slug;
    const episodeParam = params.episode?.replace("tap-", "");

    const movie = await getMovieBySlug(slug);
    if (!movie) return { title: "404 - kmovie" };
    const episode = movie.episodes[0].server_data.find((e, i) => (e.slug === "kep" ? i + 1 === parseInt(episodeParam) : e.slug === episodeParam));

    return {
        title: episode ? `Tập ${episode.slug} - ${movie.movie.name} - kmovie` : "404 - kmovie",
    };
}

export default async function Page({ params }: PageProps) {
    const episodeParam = params.episode?.replace("tap-", "");
    const movie = await getMovieBySlug(params.slug);
    if (!movie) return <div>404</div>;
    const episode = movie.episodes[0].server_data.find((e) => e.slug === episodeParam || e.name === episodeParam);
    if (!episode) return <div>404</div>;
    return (
        <main className="p-6 py-4 space-y-3 ">
            <MovieTiltle slug={movie.movie.slug} episode={episode.slug} name={movie.movie.name} />
            <MovieServer servers={movie.episodes} />
            <iframe title="Movies" allowFullScreen={true} className="w-full h-[200px]  sm:h-[100svh]" src={episode.link_embed} />
            <EpisodesList slug={movie.movie.slug} episodes={movie.episodes[0].server_data} />
            <CommentList id={movie.movie._id} />
        </main>
    );
}
