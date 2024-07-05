"use client";
import React from "react";
import Comment from "./comment";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getMovieCommentById } from "@/services/movies";
import { IComment } from "@/interface/movies";
import { LoadingIcon } from "../../../../public/static/svg";
const CommentList = ({ movieId }: { movieId: string }) => {
    // const { data: comments, isFetching } = useQuery({
    //     queryKey: ["comments", movieId, page],
    //     queryFn: async () => getMovieCommentById(movieId, page, 5),
    //     initialData: [],
    //     refetchOnWindowFocus: false,
    // });
    const {
        fetchNextPage,
        fetchPreviousPage,
        hasNextPage,
        hasPreviousPage,
        data: comments,
        isFetching,
        isFetchingNextPage,
        isFetchingPreviousPage,
        ...result
    } = useInfiniteQuery({
        queryKey: ["comments", movieId],
        queryFn: ({ pageParam = 1 }) => getMovieCommentById(movieId, pageParam, 5),
        refetchOnWindowFocus: false,
        initialPageParam: 1,

        getNextPageParam: (lastPage, allPages, pageParams) => {
            if (pageParams < (lastPage?.pagination?.totalPages ?? 0)) return pageParams + 1;
            return undefined;
        },
        getPreviousPageParam: (firstPage, allPages, pageParams) => pageParams - 1,
    });
    console.log("comments", comments);
    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 items-center">
                {comments?.pages.map((page) => {
                    return page?.comments.map((comment: IComment) => <Comment key={comment._id} comment={comment} />);
                })}
                {isFetching ? (
                    <LoadingIcon fill="#cac9c9" className="mx-auto " />
                ) : (
                    <button
                        disabled={!hasNextPage}
                        onClick={() => fetchNextPage()}
                        className="MovieWatchBtn disabled:hidden bg-[#ffce4f] opacity-90 hover:opacity-100 w-full m-auto p-2 text-[#000] rounded    text-sm font-semibold"
                    >
                        Tải thêm bình luận
                    </button>
                )}
            </div>
            {/*  */}
        </div>
    );
};

export default CommentList;
