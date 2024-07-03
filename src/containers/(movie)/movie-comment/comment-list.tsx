"use client";
import React from "react";
import Comment from "./comment";
import { useQuery } from "@tanstack/react-query";
import { getMovieCommentById } from "@/services/movies";
import { IComment } from "@/interface/movies";
const CommentList = ({ movieId }: { movieId: string }) => {
    const { data: comments, isFetching } = useQuery({
        queryKey: ["comments", movieId],
        queryFn: async () => getMovieCommentById(movieId),
        initialData: [],
        refetchOnWindowFocus: false,
    });

    return (
        <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 items-center">
                {comments?.map((comment: IComment) => (
                    <Comment key={comment._id} comment={comment} />
                ))}

                {/* <Comment /> */}
            </div>
            <button className="MovieWatchBtn bg-[#ffce4f] opacity-90 hover:opacity-100 w-full m-auto p-2 text-[#000] rounded    text-sm font-semibold">
                Tải thêm bình luận
            </button>
        </div>
    );
};

export default CommentList;
