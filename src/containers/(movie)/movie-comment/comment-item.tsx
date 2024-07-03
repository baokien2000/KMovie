import { IComment, ICommentReply } from "@/interface/movies";
import Image from "next/image";
import React from "react";
import KLogo from "../../../../public/static/images/logo/Icon_light.png";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi";
dayjs.extend(relativeTime); // use plugin
interface CommentItemProps {
    comment: IComment | ICommentReply;
    userId?: string;
    setReplyTo: React.Dispatch<React.SetStateAction<string | null>>;
}
const CommentItem = ({ comment, userId, setReplyTo }: CommentItemProps) => {
    const handleReply = () => {
        setReplyTo(`@${comment.userId?.name ?? comment.userId?.email?.split("@")?.[0] ?? "NoName"}`);
    };
    return (
        <div className="flex bg-dark2 rounded p-2 w-full leading-[1.2]">
            <div className="relative sm:size-[60px] size-[60px] border-[2px] rounded-[8px] border-[#656565] ">
                <Image fill src={comment.userId?.avatar ?? KLogo.src} alt="avatar" className=" object-contain  rounded-[8px]" />
            </div>

            <div className="flex-1 flex flex-col ml-[10px]">
                <div className=" font-bold text-[#ffce4f] text-[14px]">
                    {comment.userId?.name ?? comment.userId?.email?.split("@")?.[0] ?? "NoName"}
                </div>
                <div className="text-[#afaaaa] pt-1 pb-2 text-[13px]  break-all">{comment.content}</div>
                <div className=" text-xs flex gap-3">
                    <span className="text-[#7d7d7d]">{dayjs(comment.createdAt).locale("vi").fromNow()}</span>
                    {userId && <button onClick={handleReply}>Trả lời</button>}
                </div>
            </div>
        </div>
    );
};
export default CommentItem;
