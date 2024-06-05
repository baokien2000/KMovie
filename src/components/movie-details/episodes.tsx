import { IServerData } from "@/interface/movies";
import Link from "next/link";
import React from "react";
interface EpisodesProps {
    slug: string;
    episodes: IServerData[];
}
const Episodes = ({ slug, episodes }: EpisodesProps) => {
    return (
        <div className="sm:w-[300px] w-full p-3 space-y-2 bg-[#3A3A3A] rounded">
            <h3 className="font-semibold ">Danh sách tập phim</h3>
            <div className="customScrollBar pr-2 text-sm overflow-auto items-start flex flex-wrap  max-h-[300px]">
                {episodes.map((ep, index) => {
                    return (
                        <Link
                            href={"/phim/" + slug + "/tap-" + ep.slug + (ep.slug.toString() === "kep" ? "-" + ep.filename : "")}
                            key={ep.slug + index}
                            className="hover:bg-[#ffce4f] hover:text-[#000] px-[10px] py-[5px] text-center sm:w-1/4 w-1/5 bg-[#333232] border-[1px] border-[#4e4e4e]"
                        >
                            {ep.slug.toString() === "full" ? "full" : index + 1}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Episodes;
