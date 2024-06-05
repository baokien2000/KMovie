import React from "react";
import KLogo from "../../../../public/static/images/logo/Icon_light.png";
import Image from "next/image";

const Comment = () => {
    return (
        <div className="flex bg-dark2 rounded p-2 w-full">
            <Image
                width={60}
                height={60}
                src={KLogo.src}
                alt="avatar"
                className=" object-cover h-[60px] w-[60px] border-[3px] border-[#656565] rounded-[8px]"
            />
            <div className="flex-1 flex flex-col ml-[10px]">
                <div className=" font-bold text-[#ffce4f] text-[14px]">Bảo Kiên</div>
                <div className="text-[#afaaaa] text-[13px] break-all">Test bình luận</div>
                <div className="text-[#7d7d7d] text-xs">1 giờ trước</div>
            </div>
        </div>
    );
};

export default Comment;
