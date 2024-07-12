import { IMovie } from "@/interface/movies";
import { cn } from "@/lib/cn";
import { Link } from "@/lib/router-events";
import { renderEpisode } from "@/utils/format-string";
import Image from "next/image";

interface MovieCardProp {
    movie: IMovie;
    className?: string;
    ImagePath?: string;
    loading?: "eager" | "lazy";
    quality?: number;
    enableBlur?: boolean;
    priority?: boolean;
}
const MovieCard = (props: MovieCardProp) => {
    const { movie, className, ImagePath, loading = "lazy", quality = 75, enableBlur, priority = false } = props;
    return (
        <Link
            href={"/phim/" + movie.slug}
            className={cn(" bg-black block p-1 sm:p-1  relative cursor-pointer hover:opacity-[80%] h-full w-full aspect-[3/4]", className)}
            rel={"preload"}
        >
            <div className="relative h-[calc(100%-24px)] w-full">
                <Image
                    src={ImagePath + movie.thumb_url}
                    fill
                    priority={priority}
                    loading={priority ? undefined : loading}
                    placeholder={enableBlur && movie.blurImage ? "blur" : "empty"}
                    blurDataURL={movie.blurImage}
                    quality={quality}
                    alt={"thumbnail " + movie.name}
                    className="transform object-cover  brightness-90 transition group-hover:brightness-110"
                    sizes="(max-width: 640px) 150px, (max-width: 1280px) 200px,250px"
                />
            </div>
            <p className="truncate  whitespace-nowrap w-full px-1 leading-5 mt-1 h-5  text-xs laptopSmall:text-sm text-center text-[#cc8d4c] font-bold">
                {movie.name}
            </p>
            <div className="absolute sm:top-3 top-2 left-2  sm:left-3 rounded px-2 py-1 text-xs sm:text-sm  border-[3px] border-double bg-[#383838] border-[#5a5a5a]">
                <span className="text-title font-semibold   ">{renderEpisode(movie?.episode_current, movie?.episode_total)}</span>
            </div>
        </Link>
    );
};

export default MovieCard;
