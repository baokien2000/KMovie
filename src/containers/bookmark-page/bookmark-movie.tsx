"use client";
import Loading from "@/app/(movie-list-container)/theo-doi/loading";
import MovieListContainer from "@/components/movies/list/movie-list-container";
import { pageSize } from "@/enum/movies";
import { Link } from "@/lib/router-events";
import { getBookmarkMovie } from "@/services/movies";
import { useAuthStore } from "@/store/auth/auth.store";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { EmptyIcon } from "../../../public/static/svg/empty";
interface BookmarkMoviesProps {
    searchParams?: { [key: string]: string | undefined };
}

const BookmarkMovies = ({ searchParams }: BookmarkMoviesProps) => {
    const [initialLoading, setInitialLoading] = React.useState(true);
    const user = useAuthStore((state) => state.user);
    const { data: bookmarkMovies, isFetching } = useQuery({
        queryKey: ["bookmark-movie", user?._id, searchParams?.page],
        queryFn: async () => getBookmarkMovie(searchParams?.page ? parseInt(searchParams.page) : 1, pageSize, user?._id ?? ""),
        refetchOnWindowFocus: false,
        enabled: (user?._id?.length ?? 0) > 0,
    });
    useEffect(() => {
        setInitialLoading(false);
    }, []);

    if (isFetching || initialLoading) return <Loading />;
    if (!user?._id)
        return (
            <div className="w-full flex items-center justify-center h-10">
                <Link
                    href="/dang-nhap"
                    className="opacity-90 hover:opacity-100 bg-[#ffce4f] w-fit mx-auto p-2 text-[#000] rounded    text-sm font-semibold"
                >
                    Đăng nhập để sử dụng chức năng này
                </Link>
            </div>
        );

    if (!bookmarkMovies || bookmarkMovies?.movies?.length === 0)
        return (
            <div className="w-full h-full flex-1 gap-3 flex-col min-h-[300px]  flex items-center text justify-center text-default">
                <EmptyIcon className="phone:size-[160px]  sm:size-[204px] size-[120px]" />
                <p className="text-xs phone:text-sm">Bạn chưa theo dõi bộ phim nào</p>
            </div>
        );
    return <MovieListContainer titleId="BookmarkListTitle" initialData={bookmarkMovies} searchParams={searchParams} />;
};

export default BookmarkMovies;
