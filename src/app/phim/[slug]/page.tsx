import Action from "@/containers/movie-details/action";
import CommentList from "@/containers/movie-comment";
import Description from "@/containers/movie-details/description";
import Episodes from "@/containers/movie-details/episodes";
import Info from "@/containers/movie-details/info";
import Text from "@/components/text";
import { getMovieBySlug } from "@/services/movies";
import React from "react";

interface PageProps {
    params: {
        slug: string;
    };
}
export default async function Page({ params }: PageProps) {
    const movie = await getMovieBySlug(params.slug);
    console.log("movies", movie);
    if (!movie) return <div>404</div>;
    return (
        <main className="p-6 py-4 space-y-3">
            <Info movie={movie.movie} />
            <Action slug={params.slug} episodes={movie.episodes[0].server_data[0]} />
            <div className="flex sm:flex-row flex-col gap-3 text-[#ccc] ">
                <Episodes slug={params.slug} episodes={movie.episodes[0].server_data} />
                <Description content={movie.movie.content} />
            </div>
            <CommentList id={movie.movie._id} />
        </main>
    );
}
