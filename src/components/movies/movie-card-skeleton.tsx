import { cn } from "@/lib/cn";
interface MovieCardSkeletonProp {
    className?: string;
}
const MovieCardSkeleton = ({ className }: MovieCardSkeletonProp) => {
    return (
        <div className={cn(" bg-black block p-[5px] mx-[2px] my-[5px] relative w-full h-[250px] ", className)}>
            <div className="relative h-full first-line:w-full animate-pulse  bg-white/10" />
        </div>
    );
};

export default MovieCardSkeleton;
