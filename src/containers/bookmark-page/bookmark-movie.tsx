"use client";
import Loading from "@/app/(movie-list-container)/theo-doi/loading";
import MoviesList from "@/components/movies/list/movies-list";
import { pageSize } from "@/enum/movies";
import { useRouter } from "@/lib/router-events";
import { getMovieBySlugArray } from "@/services/movies";
import { useUserStore } from "@/store/user/user.store";
import { createQueryString } from "@/utils/format-string";
import { scrollToTitleId } from "@/utils/scroll";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
const MoviePagination = dynamic(() => import("@/components/movies/pagiantion/movie-pagination"), { ssr: false });
interface BookmarkMoviesProps {
    searchParams?: { [key: string]: string | undefined };
    page: number;
}

const BookmarkMovies = ({ searchParams, page }: BookmarkMoviesProps) => {
    const [isLoading, setIsloading] = React.useState(true);
    const bookmarks = useUserStore((state) => state.bookmarks);
    const router = useRouter();

    useEffect(() => setIsloading(false), []);

    const { data: movies, isFetching } = useQuery({
        queryKey: ["bookmark-movie", bookmarks],
        queryFn: async () => getMovieBySlugArray(page, pageSize, bookmarks),
        refetchOnWindowFocus: false,
        enabled: bookmarks.length > 0,
    });
    if (isLoading || isFetching) return <Loading />;
    if (!bookmarks || bookmarks.length === 0) {
        return <div className="text-center text-base">Bạn chưa theo dõi bộ phim nào</div>;
    }

    const handlePageClick = (data: { selected: number }) => {
        const queryString = createQueryString(searchParams, "page", (data.selected + 1).toString());
        scrollToTitleId("BookmarkListTitle");
        router.push(`theo-doi?${queryString}`, { scroll: false });
    };

    return (
        <>
            <MoviesList quality={50} enableBlur movies={movies} />
            <MoviePagination onPageClick={handlePageClick} totalPage={Math.ceil(movies?.pagination?.totalPages ?? 0)} />
        </>
    );
};

export default BookmarkMovies;
