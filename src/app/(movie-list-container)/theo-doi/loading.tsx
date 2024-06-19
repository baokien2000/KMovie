import NewMovieSkeleton from "@/containers/home/new-movie-skeleton";
import { LoadingIcon } from "../../../../public/static/svg";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="h-[300px]  w-full flex items-center justify-center">
            <LoadingIcon size="30" fill="#cac9c9" />
        </div>
    );
}
