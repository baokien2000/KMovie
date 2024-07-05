"use client";
import { IServerData } from "@/interface/movies";
import { cn } from "@/lib/cn";
import { Link } from "@/lib/router-events";
import { getEpisodeHistory } from "@/services/movies";
import { useAuthStore } from "@/store/auth/auth.store";
import { useQuery } from "@tanstack/react-query";
import React from "react";
interface EpisodesProps {
    slug: string;
    episodes: IServerData[];
    currentEpisode: string;
}
const EpisodesList = ({ slug, episodes, currentEpisode }: EpisodesProps) => {
    const user = useAuthStore((state) => state.user);
    const { data: history, isFetching } = useQuery({
        queryKey: ["viewed-movie", user?._id],
        queryFn: async () => getEpisodeHistory(user?._id ?? "", slug),
        refetchOnWindowFocus: false,
        enabled: (user?._id?.length ?? 0) > 0,
    });
    return (
        <div className="w-full p-3 space-y-2 text-default  bg-des sm:rounded">
            <h3 className="font-semibold ">Danh sách tập phim</h3>
            <div className=" text-sm overflow-auto  items-start flex flex-wrap ">
                {episodes.map((ep, index) => {
                    return (
                        <Link
                            href={`/phim/${slug}/tap-${ep.slug === "kep" ? ep.slug : index + 1}`}
                            key={ep.slug + index}
                            className={cn(
                                "hover:bg-mainColor/90 hover:border-[#4A4A4A] hover:text-black  py-1 text-center w-[48px] bg-[#333232] border border-[#4e4e4e]",
                                {
                                    "bg-black/80": history?.episodes?.includes(ep.slug),
                                    "bg-mainColor text-black": currentEpisode === ep.slug,
                                }
                            )}
                        >
                            {["full", "trailer"].includes(ep.slug) ? ep.slug : index + 1}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default EpisodesList;
