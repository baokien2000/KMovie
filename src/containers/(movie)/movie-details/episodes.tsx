import { IServerData } from "@/interface/movies";
import { cn } from "@/lib/cn";
import { Link } from "@/lib/router-events";
import React from "react";
interface EpisodesProps {
    slug: string;
    episodes: IServerData[];
    trailerUrl: string | null;
}
const EpisodesList = ({ slug, episodes, trailerUrl }: EpisodesProps) => {
    return (
        <div className={cn("sm:w-[300px] w-full p-3 space-y-2 bg-cardBackground rounded")}>
            <h3 className="font-semibold ">Danh sách tập phim</h3>
            <div className="customScrollBar pr-2 text-sm overflow-auto items-start flex flex-wrap  max-h-[300px]">
                {trailerUrl ? (
                    <Link
                        href={`/phim/${slug}/trailer`}
                        className="hover:bg-[#ffce4f] hover:text-[#000] px-[10px] py-[5px] text-center w-[60px] bg-[#333232] border-[1px] border-[#4e4e4e]"
                    >
                        Trailer
                    </Link>
                ) : (
                    episodes.map((ep, index) => {
                        return (
                            <Link
                                href={`/phim/${slug}/tap-${ep.slug === "kep" ? ep.slug : index + 1}`}
                                key={ep.slug + index}
                                className="hover:bg-[#ffce4f] hover:text-[#000] px-[10px] py-[5px] text-center sm:w-1/4 w-1/5 bg-[#333232] border-[1px] border-[#4e4e4e]"
                            >
                                {ep.slug.toString() === "full" ? "full" : index + 1}
                            </Link>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default EpisodesList;
