"use client"
import React from "react";
import { IServerData } from "@/interface/movies";
interface MoviePlayerProps {
    episode: IServerData;
    movieSlug: string;
}
const MoviePlayer = ({ episode, movieSlug }: MoviePlayerProps) => {
    return (
        <div className="relative w-full bg-black h-auto aspect-video">
            <iframe
                key={`${movieSlug}-${episode.slug}`}
                title="Movies"
                allowFullScreen
                className=" aspect-video w-full h-auto"
                src={episode.link_embed}
                referrerPolicy="no-referrer"
            />
        </div>
    );
};

export default MoviePlayer;
