import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import MoviePaginationInput from "./movie-pagination-input";
import { useSearchParams } from "next/navigation";
import { cn } from "@/lib/cn";
import { scrollToTitleId } from "@/utils/scroll";
import Link from "next/link";
import { useQueryClient } from "@tanstack/react-query";
import { PaginationButton } from "./pagination-button";
interface MoviePaginationProp {
    totalPage: number;
}

const MoviePagination = ({ totalPage }: MoviePaginationProp) => {
    const pageParam = useSearchParams().get("page") || "1";
    const page = parseInt(pageParam ?? 1);

    return (
        <div className="flex bg-[#585858] mx-auto my-[10px] overflow-hidden w-fit items-center rounded shadow-sm justify-center">
            <nav className="isolate flex-1  inline-flex justify-between  " aria-label="Pagination">
                <Link
                    href={`?page=${page - 1}`}
                    aria-current="page"
                    onClick={() => scrollToTitleId("MovieListTitle")}
                    scroll={false}
                    className={cn(
                        "relative z-10 inline-flex items-center   px-4 py-2  font-semibold text-white/80 hover:text-mainColor",
                        page === 1 ? "pointer-events-none" : ""
                    )}
                >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </Link>

                <PaginationButton isCurrent={page === 1} page="1" />

                <PaginationButton isCurrent={page === 2} page={page < 5 ? "2" : "..."} className={page > 4 ? "pointer-events-none" : ""} />
                <PaginationButton isCurrent={page === 3} page={page <= 4 ? "3" : page >= totalPage - 3 ? totalPage - 6 : page - 2} />
                <PaginationButton isCurrent={page === 4} page={page <= 4 ? "4" : page >= totalPage - 3 ? totalPage - 5 : page - 1} />

                <PaginationButton isCurrent={page < totalPage - 3 && page > 4} page={page >= totalPage - 3 ? totalPage - 4 : page > 4 ? page : 5} />

                <PaginationButton isCurrent={page === totalPage - 3} page={page <= 4 ? 6 : page >= totalPage - 3 ? totalPage - 3 : page + 1} />
                <PaginationButton isCurrent={page === totalPage - 2} page={page <= 4 ? 7 : page >= totalPage - 3 ? totalPage - 2 : page + 2} />
                <PaginationButton
                    isCurrent={page === totalPage - 1}
                    page={page >= totalPage - 3 ? totalPage - 1 : "..."}
                    className={page < totalPage - 3 ? "pointer-events-none" : ""}
                />

                <PaginationButton page={totalPage} isCurrent={page === totalPage} />

                {/* <a href="#" className="relative inline-flex items-center  px-2 py-2 text-white/80 hover:text-mainColor ">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a> */}
                <Link
                    href={`?page=${page + 1}`}
                    aria-current="page"
                    onClick={() => scrollToTitleId("MovieListTitle")}
                    scroll={false}
                    className={cn(
                        "relative z-10 inline-flex items-center   px-4 py-2  font-semibold text-white/80 hover:text-mainColor",
                        page === totalPage ? "pointer-events-none" : ""
                    )}
                >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </Link>
            </nav>
            <MoviePaginationInput totalPage={totalPage} />
        </div>
    );
};

export default MoviePagination;
