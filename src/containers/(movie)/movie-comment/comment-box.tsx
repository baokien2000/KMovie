"use client";
import { Link } from "@/lib/router-events";
import { useAuthStore } from "@/store/auth/auth.store";
import React from "react";
import CommentArea from "./comment-area";
const CommentBox = ({ movieId }: { movieId: string}) => {
    const user = useAuthStore((state) => state.user);
    if (!user)
        return (
            <Link
                href="/dang-nhap"
                className="MovieWatchBtn opacity-90 hover:opacity-100 bg-[#ffce4f] w-fit m-auto p-2 text-[#000] rounded    text-sm font-semibold"
            >
                Đăng nhập để bình luận
            </Link>
        );
    return <CommentArea userId={user._id} movieId={movieId} />;
};

export default CommentBox;
