"use client";
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
    const user = useAuthStore((state) => state.user);
    useEffect(() => {
        if (user?._id) {
            const addHistoryEpisode = async () => {
                const addRes = await addEpisodeHistory(user?._id, movieSlug, episode.slug);
            };
            addHistoryEpisode();
        }
    }, [user?._id]);
    return (
        <div className="relative w-full bg-black h-auto aspect-video">
            <iframe
                title="Movies"
                allowFullScreen
                onError={(e) => {
                    console.log(e);
                    alert(e);
                }}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                className=" aspect-video w-full h-auto"
                src={episode.link_embed.replace("https:", "")}
            />
        </div>
    );
    
    
};

export default MoviePlayer;
