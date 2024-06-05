import { IMovie } from "@/interface/movies";
import { cn } from "@/lib/cn";
import { renderEpisode } from "@/utils/format-string";
import Image from "next/image";
import Link from "next/link";
import ImageView from "../image/image-view";

interface MovieCardProp {
    movie: IMovie;
    className?: string;
    ImagePath?: string;
    blurUrl?: string;
}
const MovieCard = (props: MovieCardProp) => {
    const { movie, className, ImagePath } = props;
    return (
        <Link
            href={"/phim/" + movie.slug}
            className={cn(" bg-black block p-[5px] mx-[2px] my-[5px] relative cursor-pointer hover:opacity-[80%] ", className)}
        >
            <div className="relative h-[calc(100%-25px)] w-full">
                <Image
                    quality={5}
                    src={ImagePath + movie.thumb_url}
                    rel="preload"
                    fill
                    alt={"thumbnail " + movie.name}
                    className="transform object-cover  brightness-90 transition group-hover:brightness-110"
                    placeholder={movie?.blurImage ? "blur" : undefined}
                    blurDataURL={movie?.blurImage}
                    loading="eager"
                    sizes="(max-width: 640px) 200px, (max-width: 1280px) 200px,300px"
                />
            </div>
            <p className="truncate px-[3p] py-[5px] text-sm text-center text-[#cc8d4c] font-bold">{movie.name}</p>
            <div className="absolute top-[15px]  left-[15px] px-[12px]  border-[3px] border-double bg-[#383838] border-[#5a5a5a]">
                <span className="text-[#cac9c9] font-bold text-sm">{renderEpisode(movie?.episode_current, movie?.episode_total)}</span>
            </div>
        </Link>
    );
};

export default MovieCard;
