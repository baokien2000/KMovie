"use client";
import Image from "next/image";
import React from "react";
const UserContainerSkeleton = () => {
    return (
        <div className="w-full text-sm rounded overflow-hidden">
            <h1 className="p-3 bg-cardBackground text-base text-center text-[#cccccc] font-bold uppercase ">Thông tin cá nhân</h1>
            <div className="flex h-full flex-col sm:flex-row p-[10px] bg-[#191919] items-start  ">
                <div className="w-fit h-full p-[5px] animate-pulse    bg-cardBackground rounded">
                    <div className="relative aspect-square sm:w-[250px] rounded sm:min-w-[250px] w-full h-full "></div>
                </div>
                {/* <img src={movie.thumb_url} alt="thumbnail" className="sm:w-[250px] w-full mb-[20px] sm:mb-[0] object-cover " /> */}
                <div className="w-full text-[#ccc] ml-[10px] ">
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[120px] ">Email</span>
                        <span className="flex-1 text-center font-medium bg animate-pulse    bg-cardBackground " />
                    </div>
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[120px] ">Họ Tên</span>
                        <span className="flex-1 text-center font-medium bg animate-pulse    bg-cardBackground " />
                    </div>
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[120px]">Ngày tham gia</span>
                        <span className="flex-1 text-center font-medium bg animate-pulse    bg-cardBackground " />
                    </div>
                    <div className="flex w-full p-4 border-b border-secondary">
                        <span className="font-bold w-[120px]">Giới tính</span>
                        <span className="flex-1 text-center font-medium bg animate-pulse    bg-cardBackground " />
                    </div>
                    <div className="flex w-full p-4 ">
                        <span className="font-bold w-[120px]">Số phim đã xem</span>
                        <span className="flex-1 text-center font-medium bg animate-pulse    bg-cardBackground " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserContainerSkeleton;
