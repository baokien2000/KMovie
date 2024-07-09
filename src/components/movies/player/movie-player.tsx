// "use client";
import React, { useEffect, useState } from "react";
import { LoadingIcon } from "../../../../public/static/svg";
import { cn } from "@/lib/cn";
import { IServerData } from "@/interface/movies";
import { addEpisodeHistory, getEpisodeHistory } from "@/services/movies";
import { useAuthStore } from "@/store/auth/auth.store";
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
                // sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                className=" aspect-video w-full h-auto"
                src={episode.link_embed}
                referrerPolicy="no-referrer"
            />
        </div>
    );
};

export default MoviePlayer;
