import { getEpisodeHistory, getMovieBySlug } from "@/services/movies";
import React, { Suspense } from "react";
import MovieTiltle from "@/containers/movie-watch/movie-tiltle";
import MovieServer from "@/containers/movie-watch/movie-server";
import EpisodesList from "@/containers/movie-watch/movie-episodes";
import CommentList from "@/containers/movie-comment";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import MoviePlayer from "@/components/movies/player/movie-player";
import { cookies } from "next/headers";

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
    const isTrailer = episodeParam === "trailer";
    if (isTrailer) return { title: `Trailer - ${movie.movie.name} - kmovie` };
    const episode = movie.episodes[0].server_data.find((e) => e.slug === episodeParam || e.name === episodeParam);
    return {
        title: episode ? `Tập ${episode.slug} - ${movie.movie.name} - kmovie` : "404 - kmovie",
    };
}

export default async function Page({ params }: PageProps) {
    const episodeParam = params.episode?.replace("tap-", "");
    const movie = await getMovieBySlug(params.slug);

    const isTrailer = episodeParam === "trailer";
    if (!movie) return <div>Không tìm thấy phim | 404</div>;
    const episode = isTrailer
        ? {
              slug: "trailer",
              link_embed: movie.movie.trailer_url.replace("watch?v=", "embed/"), // For Youtube video
              name: "Trailer",
          }
        : movie.episodes[0].server_data.find((e) => e.slug === episodeParam || e.name === episodeParam);
    if (!episode) return <div>Không tìm thấy tập phim | 404</div>;
    const history = await getEpisodeHistory("66715fb6a1d2d291a9c17d20", movie.movie.slug);
    console.log("history", history);
    return (
        <main className="p-6 py-4 space-y-3 ">
            <MovieTiltle slug={movie.movie.slug} episode={episode.slug} name={movie.movie.name} />
            <MovieServer servers={movie.episodes} />
            <MoviePlayer movieSlug={movie.movie.slug} episode={episode} />
            <EpisodesList currentEpisode={episodeParam} history={history} slug={movie.movie.slug} episodes={movie.episodes[0].server_data} />
            <CommentList id={movie.movie._id} />
        </main>
    );
}
