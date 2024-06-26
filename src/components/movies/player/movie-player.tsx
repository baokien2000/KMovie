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
        <div className="relative h-[200px] sm:h-[100svh] w-full">
            <div
                className={cn(
                    "w-full pointer-events-none transition-opacity duration-100 absolute top-0 left-0  h-full bg-black  flex items-center justify-center  ",
                    {
                        "opacity-0": !loading,
                        "opacity-100": loading,
                    }
                )}
            >
                <LoadingIcon className="sm:h-10 sm:w-10 h-8 w-8 " />
            </div>
            <iframe
                onLoadedData={() => console.log("onLoadedData")}
                onLoad={() => setLoading(false)}
                onPlay={() => console.log("onPlay")}
                title="Movies"
                allowFullScreen
                style={{ display: loading ? "none" : "block" }}
                className="w-full h-[200px]  sm:h-[100svh]"
                src={episode.link_embed}
            />
        </div>
    );
};

export default MoviePlayer;
