import { IServerData } from "@/interface/movies";
import Link from "next/link";
import React from "react";
interface EpisodesProps {
    slug: string;
    episodes: IServerData[];
}
const EpisodesList = ({ slug, episodes }: EpisodesProps) => {
    return (
        <div className="w-full p-3 space-y-2 text-default  bg-des rounded">
            <h3 className="font-semibold ">Danh sách tập phim</h3>
            <div className=" text-sm overflow-auto items-start flex flex-wrap ">
                {episodes.map((ep, index) => {
                    return (
                        <Link
                            href={`/phim/${slug}/tap-${ep.slug === "kep" ? ep.slug : index + 1}`}
                            key={ep.slug + index}
                            className="hover:bg-mainColor hover:border-[#4A4A4A] hover:text-black  py-1 text-center w-[45px] bg-[#333232] border border-[#4e4e4e]"
                        >
                            {ep.slug.toString() === "full" ? "full" : index + 1}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default EpisodesList;
