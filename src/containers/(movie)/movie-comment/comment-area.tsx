import { Button, Field, Textarea } from "@headlessui/react";
import React, { useEffect, useId } from "react";
import { LoadingIcon, SendIcon } from "../../../../public/static/svg";
import { cn } from "@/lib/cn";
import { addMovieComment, replyMovieComment } from "@/services/movies";
import toast from "react-hot-toast";
import { set } from "nprogress";
import { useQueryClient } from "@tanstack/react-query";
interface CommentAreaProps {
    movieId: string;
    userId: string;
    row?: number;
    replyId?: string;
    replyTo?: string;
}
const CommentArea = ({ movieId, userId, row = 3, replyId, replyTo }: CommentAreaProps) => {
    const [comment, setComment] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const queryClient = useQueryClient();
    const id = useId();
    const handleAddComment = async () => {
        setLoading(true);
        const res = replyId
            ? await replyMovieComment({ movieId, userId, content: comment, replyId })
            : await addMovieComment({ movieId, userId, content: comment });
        // if (!res) return toast.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
        console.log("Res", res);

        switch (res?.status) {
            case 400:
                toast.error(res?.data?.message);
                break;
            case 200:
                setComment("");
                queryClient.invalidateQueries({
                    queryKey: ["comments", movieId],
                });
                break;
            default:
                toast.error("Đã xảy ra lỗi, vui lòng thử lại sau!");
                break;
        }
        setLoading(false);
    };
    useEffect(() => {
        if (replyTo) {
            setComment(replyTo);
        }
    }, [replyTo]);
    return (
        <Field className={"relative text-sm  bg-black rounded w-full"}>
            <Textarea
                id={`comment-${replyId ?? id}`}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        comment.length > 0 && !loading && handleAddComment();
                    }
                }}
                className={cn(
                    "block customScrollBar w-full bg-black resize-none rounded border-none  py-1.5 px-3 text-sm/6 text-white outline-none   "
                )}
                rows={row}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                placeholder="Nhập bình luận của bạn tại đây..."
            />
            <Button
                disabled={loading || comment.length === 0}
                className={cn("absolute bottom-2 right-2", comment.length === 0 && "opacity-40")}
                onClick={handleAddComment}
            >
                {loading ? <LoadingIcon fill="currentColor" /> : <SendIcon fill="currentColor" />}
            </Button>
        </Field>
    );
};

export default CommentArea;
