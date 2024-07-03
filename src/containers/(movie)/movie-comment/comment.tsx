import React, { useState } from "react";
import KLogo from "../../../../public/static/images/logo/Icon_light.png";
import Image from "next/image";
import { IComment } from "@/interface/movies";

import CommentBox from "./comment-box";
import CommentArea from "./comment-area";
import { useAuthStore } from "@/store/auth/auth.store";
import CommentItem from "./comment-item";

const Comment = ({ comment }: { comment: IComment }) => {
    const [replyTo, setReplyTo] = useState<string | null>(null);
    const user = useAuthStore((state) => state.user);
    return (
        <div className="flex flex-col gap-1 w-full">
            <CommentItem userId={user?._id} comment={comment} setReplyTo={setReplyTo} />
            <div className="border-l border-black   flex flex-col gap-1 w-   pl-3 ml-3">
                {comment.replies.map((reply) => (
                    <CommentItem key={reply._id} userId={user?._id} setReplyTo={setReplyTo} comment={reply} />
                ))}
                {replyTo && <CommentArea replyTo={replyTo} replyId={comment._id} userId={user?._id!} row={1} movieId={comment.movieId} />}

                {/* <Comment />
        <Comment /> */}

                {/* <div className="w-full flex justify-center">
            <span className="cursor-pointer font-semibold text-sm hover:text-white/80">Tải thêm</span>
        </div> */}
            </div>
        </div>
    );
};

export default Comment;
