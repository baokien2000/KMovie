import React, { useEffect, useState } from "react";
import { IComment } from "@/interface/movies";
import CommentArea from "./comment-area";
import { useAuthStore } from "@/store/auth/auth.store";
import CommentItem from "./comment-item";

const Comment = ({ comment }: { comment: IComment }) => {
    const [replyTo, setReplyTo] = useState<string | null>(null);
    const [limit, setLimit] = useState(3);
    const user = useAuthStore((state) => state.user);
    useEffect(() => {
        if (replyTo) {
            setLimit(comment.replies.length + 1);
        }
    }, [replyTo]);
    return (
        <div className="flex flex-col gap-1 w-full">
            <CommentItem userId={user?._id} comment={comment} setReplyTo={setReplyTo} />
            <div className="border-l border-black   flex flex-col gap-1   sm:pl-3 pl-2 ml-2 sm:ml-3">
                {comment.replies.slice(0, limit).map((reply) => (
                    <CommentItem key={reply._id} userId={user?._id} setReplyTo={setReplyTo} comment={reply} />
                ))}
                {limit < comment.replies.length && (
                    <button onClick={() => setLimit((pre) => pre + 5)} className="w-full flex justify-center">
                        <span className="cursor-pointer font-semibold text-xs hover:text-white/80">Tải thêm</span>
                    </button>
                )}
                {replyTo && <CommentArea replyTo={replyTo} replyId={comment._id} userId={user?._id!} row={1} movieId={comment.movieId} />}

                {/* <Comment />
        <Comment /> */}
            </div>
        </div>
    );
};

export default Comment;
