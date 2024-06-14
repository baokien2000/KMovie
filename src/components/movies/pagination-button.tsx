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
                "relative z-10 inline-flex items-center   px-2 min-w-[36px] justify-center py-2 ",
                isCurrent ? "bg-mainColor text-dark1" : "text-title hover:text-mainColor",
                className
            )}
        >
            {page}
        </Link>
    );
};
