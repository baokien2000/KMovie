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
            onClick={onClick}
            href={"/phim/" + value.slug}
            className="group flex sm:hover:bg-white/10  cursor-pointer items-start gap-2 sm:rounded-md p-2 select-none "
        >
            <div className="relative size-12 sm:size-14 min-w-[48px]">
                <Image
                    sizes="(max-width: 640px) 100px, 200px"
                    blurDataURL={value.blurImage}
                    placeholder={value.blurImage ? "blur" : "empty"}
                    src={imagePath + value.thumb_url}
                    alt={value.slug}
                    loading="eager"
                    fill
                    className="object-cover rounded"
                />
            </div>
            <div className="text-sm flex flex-col sm:leading-[1.2] leading-[1] sm:gap-1 gap-0.5 text-white">
                <p className="line-clamp-1">{value.name}</p>
                <p className="text-title text-xs ">{value.origin_name}</p>
                <p className="text-title text-xs ">{value.episode_current}</p>
            </div>
        </Link>
    );
};

export default SearchItem;
