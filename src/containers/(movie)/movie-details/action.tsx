import { IMovieDetails, IServerData } from "@/interface/movies";
import { Link } from "@/lib/router-events";
import React from "react";
import { PlayIcon, StarIcon } from "../../../../public/static/svg";
import Bookmark from "./bookmark";
interface ActionProps {
    slug: string;
    isTrailer: boolean;
    episodes: IServerData;
}
const Action = ({ slug, isTrailer, episodes }: ActionProps) => {
    return (
        <div className="flex justify-between p-3 bg-cardBackground  text-sm  rounded">
            <Link
                href={`/phim/${slug}/${isTrailer ? "trailer" : "/tap-" + episodes.slug} `}
                className="py-1 font-bold text-[#111827] rounded-md flex opacity-90 hover:opacity-100 items-center justify-center gap-2 sm:w-[200px] w-[130px]  bg-[#ffce4f]"
            >
                <PlayIcon />
                <span>Xem ngay</span>
            </Link>
            <div className="flex sm:gap-[10px] gap-[5px] text-title ">
                <Bookmark slug={slug} />

                <Link
                    href={"#"}
                    className="py-1  bg-[#191919] px-3   hover:text-mainColor  rounded-md flex items-center justify-center gap-2 w-fit  "
                >
                    {" "}
                    <StarIcon fill="currentColor" />
                    Đánh giá
                </Link>
            </div>
        </div>
    );
};

export default Action;
