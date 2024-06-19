"use client";
import React, { useEffect } from "react";
import MoviePagination from "@/components/movies/pagiantion/movie-pagination";
import { ImovieList } from "@/interface/movies";
import MoviesList from "@/components/movies/list/movies-list";
import { createQueryString } from "@/utils/format-string";
import { usePathname } from "next/navigation";
import { scrollToTitleId } from "@/utils/scroll";
import { useRouter } from "@/lib/router-events";
import Loading from "@/app/(movie-list-container)/theo-doi/loading";
interface MovieListContainerProps {
    searchParams?: { [key: string]: string | undefined };
    initialData: ImovieList;
    titleId: string;
}

const MovieListContainer = ({ searchParams, initialData, titleId }: MovieListContainerProps) => {
    const [loading, setLoading] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setLoading(false);
    }, [initialData?.pagination?.currentPage]);

    const handlePageClick = (data: { selected: number }) => {
        const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());
        scrollToTitleId(titleId);
        router.push(`${pathname}?${queryString}`, { scroll: false });
    };
    return loading ? (
        <Loading />
    ) : (
        <>
            <MoviesList quality={50} enableBlur movies={initialData} />
            <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(initialData?.pagination?.totalPages ?? 0)} />
        </>
    );
};

export default MovieListContainer;
