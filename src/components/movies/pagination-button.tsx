import { cn } from "@/lib/cn";
import { scrollToTitleId } from "@/utils/scroll";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export const PaginationButton = ({ page, isCurrent, className }: { page: string | number; isCurrent?: boolean; className?: string }) => {
    const queryClient = useQueryClient();

    return (
        <Link
            onClick={() => {
                queryClient.invalidateQueries({
                    queryKey: ["getMoviesPerPage", page],
                });
                scrollToTitleId("MovieListTitle");
            }}
            scroll={false}
            aria-current="page"
            href={{
                pathname: "/",
                query: { page: page },
            }}
            className={cn(
                "relative z-10 inline-flex items-center   px-4 py-2  font-semibold ",
                isCurrent ? "bg-mainColor text-black" : "text-white/80 hover:text-mainColor",
                className
            )}
        >
            {page}
        </Link>
    );
};
