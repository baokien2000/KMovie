import { getMovieBySlug } from "@/services/movies";
import React, { Suspense } from "react";
import MovieTiltle from "@/containers/(movie)/movie-watch/movie-tiltle";
import MovieServer from "@/containers/(movie)/movie-watch/movie-server";
import EpisodesList from "@/containers/(movie)/movie-watch/movie-episodes";
import CommentContainer from "@/containers/(movie)/movie-comment";
import { Metadata } from "next";
import MoviePlayer from "@/components/movies/player/movie-player";
import MovieNoti from "@/containers/(movie)/movie-watch/movie-noti";
import MovieViewUpdated from "@/containers/(movie)/movie-watch/movie-view-updated";

interface PageProps {
    params: {
        slug: string;
        episode: string;
    };
    searchParams: {
        server: string;
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
    if (!movie) return { title: "404" };
    const isTrailer = episodeParam === "trailer";
    if (isTrailer) return { title: `Trailer - ${movie.movie.name}` };
    const episode = movie.episodes[0].server_data.find((e) => e.slug === episodeParam || e.name === episodeParam);
    return {
        title: episode ? `Tập ${episode.slug} - ${movie.movie.name}` : "404",
    };
}

export default async function Page({ params, searchParams }: PageProps) {
    let episodeParam = params.episode?.replace("tap-", "");
    const movie = await getMovieBySlug(params.slug);

    if (!movie) return <div>Không tìm thấy phim | 404</div>;
    const isTrailer = episodeParam === "trailer";
    let episode = null;
    if (isTrailer) {
        episode = {
            slug: "trailer",
            link_embed: movie.movie.trailer_url.replace("watch?v=", "embed/"), // For Youtube video
            name: "Trailer",
        };
    } else {
        if (searchParams.server) {
            const server = (episode = movie.episodes.find((i) => i.server_name.replace("#", "") === searchParams.server.replace("#", "")));
            episode = server?.server_data.find((e) => e.slug === episodeParam || e.name === episodeParam || e.slug.toLocaleLowerCase() === "full");
        } else {
            episode = movie.episodes[0].server_data.find((e) => e.slug === episodeParam || e.name === episodeParam);
        }
    }

    if (!episode) return <div>Không tìm thấy tập phim | 404</div>;
    return (
        <main className="md:p-6 sm:p-3 py-3 space-y-3 ">
            <MovieNoti />
            <MovieTiltle slug={movie.movie.slug} episode={episode.slug} name={movie.movie.name} />
            <MovieServer currentEpisode={episodeParam} servers={movie.episodes} slug={movie.movie.slug} />
            <Suspense fallback={<div className="relative w-full bg-black h-auto aspect-video text-des">Loading video</div>}>
                <MoviePlayer movieSlug={movie.movie.slug} episode={episode} />
            </Suspense>
            <MovieViewUpdated movieSlug={movie.movie.slug} episodeId={episode.slug} />
            <EpisodesList currentEpisode={episodeParam} slug={movie.movie.slug} episodes={movie.episodes[0].server_data} />
            <CommentContainer id={movie.movie._id} />
        </main>
    );
}
