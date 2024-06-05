import { IMovieDetails, IServerData } from "@/interface/movies";
import Link from "next/link";
import React from "react";
import { BookmarkIcon, PlayIcon, StarIcon } from "../../../public/static/svg";
interface ActionProps {
    slug: string;
    episodes: IServerData;
}
const Action = ({ slug, episodes }: ActionProps) => {
    return (
        <div className="flex justify-between p-3 bg-[#3A3A3A]  text-sm  rounded">
            <Link
                href={"/phim/" + slug + "/tap-" + episodes.slug}
                className="py-1 font-bold text-[#111827] rounded-md flex opacity-90 hover:opacity-100 items-center justify-center gap-2 sm:w-[200px] w-[130px]  bg-[#ffce4f]"
            >
                <PlayIcon />
                <span>Xem ngay</span>
            </Link>
            <div className="flex sm:gap-[10px] gap-[5px] text-title ">
                <Link href={"#"} className="py-1  bg-[#191919] px-3 hover:text-mainColor  rounded-md flex items-center justify-center gap-2 w-fit  ">
                    {" "}
                    <BookmarkIcon fill="currentColor" />
                    Lưu
                </Link>
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
