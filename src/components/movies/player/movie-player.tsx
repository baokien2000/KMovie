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
    const [loading, setLoading] = useState(true);
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
                onLoadedData={() => console.log("onLoadedData")}
                onLoad={() => setLoading(false)}
                onPlay={() => console.log("onPlay")}
                title="Movies"
                allowFullScreen
                className=" aspect-video w-full h-auto"
                src={episode.link_embed}
            />
        </div>
    );
};

export default MoviePlayer;
