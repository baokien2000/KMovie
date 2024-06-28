import { imagePath } from "@/enum";
import { IMovie } from "@/interface/movies";
import Image from "next/image";
import { Link } from "@/lib/router-events";
import React from "react";
interface SearchItemProps {
    value: IMovie;
    onClick?: () => void;
}
const SearchItem = ({ value, onClick }: SearchItemProps) => {
    return (
        <Link
            href={"/phim/" + value.slug}
            className="group flex sm:hover:bg-white/10  cursor-pointer items-start gap-2 sm:rounded-md p-2 select-none "
        >
            <div className="relative size-10 sm:size-14 min-w-[40px]">
                <Image
                    sizes="(max-width: 640px) 40px, 56px"
                    blurDataURL={value.blurImage}
                    placeholder={value.blurImage ? "blur" : "empty"}
                    src={imagePath + value.thumb_url}
                    alt={value.slug}
                    fill
                    className="object-cover rounded"
                />
            </div>
            <div className="text-sm flex flex-col gap-2 text-white">
                <p className="leading-3 line-clamp-1">{value.name}</p>
                <p className="text-title text-xs sm:leading-3 leading-[10px]">{value.origin_name}</p>
                <p className="text-title text-xs sm:leading-3 leading-[10px]">{value.episode_current}</p>
            </div>
        </Link>
    );
};

export default SearchItem;
