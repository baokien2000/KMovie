import React from "react";
import { FilmIcon, ReportIcon } from "../../../../public/static/svg";
import { Link } from "@/lib/router-events";
interface MovieTiltleProps {
    name: string;
    episode: string;
    slug: string;
}
const MovieTiltle = ({ name, episode, slug }: MovieTiltleProps) => {
    return (
        <div className="bg-[#000000] flex flex-col gap-3 sm:rounded p-3">
            <div className="flex  gap-3  text-mainColor font-bold  items-start">
                <FilmIcon className="min-w-[24px]" />
                <Link href={`/phim/${slug}`}>{name}</Link>
            </div>
            <hr className="border-t border-secondary border-dashed  " />
            <div className="flex justify-between text-dark3 font-bold text-sm items-center">
                <span>{"Tập " + episode}</span>
                <div className="p-1 rounded opacity-90 hover:opacity-100 bg-[#b73a3a]">
                    <ReportIcon />
                </div>
            </div>
        </div>
    );
};

export default MovieTiltle;
