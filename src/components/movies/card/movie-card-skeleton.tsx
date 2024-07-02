import { cn } from "@/lib/cn";
interface MovieCardSkeletonProp {
    className?: string;
}
const MovieCardSkeleton = ({ className }: MovieCardSkeletonProp) => {
    return (
        <div className={cn(" bg-black block p-1  relative w-full h-full aspect-[3/4] ", className)}>
            <div className="relative h-full first-line:w-full animate-pulse  bg-white/10" />
        </div>
    );
};

export default MovieCardSkeleton;
