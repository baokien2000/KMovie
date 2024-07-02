"use client";
import { useAuthStore } from "@/store/auth/auth.store";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getViewedMovie } from "@/services/movies";
import UserProfileAvatar from "./user-profile-avatar";
import UserInfoDetails from "./user-info-details";
import UserActionButton from "./user-action-button";
import { UserProfileType } from "@/enum/user";
const UserContainer = () => {
    const [status, setStatus] = React.useState<UserProfileType>("idle");
    const user = useAuthStore((state) => state.user);
    const { data: viewedMovie, isFetching } = useQuery({
        queryKey: ["viewed-movie", user?._id],
        queryFn: async () => getViewedMovie(user?._id ?? ""),
        refetchOnWindowFocus: false,
        enabled: (user?._id?.length ?? 0) > 0,
    });
    return (
        <>
            <div className="w-full text-sm rounded overflow-hidden">
                <h1 className="p-3 bg-cardBackground text-sm   text-center text-[#cccccc] font-bold uppercase">Thông tin cá nhân</h1>
                <div className="flex h-full flex-col sm:flex-row sm:p-2 bg-[#191919] items-start">
                    <UserProfileAvatar setStatus={setStatus} avatar={user?.avatar} status={status} />
                    <UserInfoDetails user={user} status={status} setStatus={setStatus} viewedMovie={viewedMovie?.movies ?? 0} />
                </div>
            </div>
            <UserActionButton status={status} setStatus={setStatus} />
        </>
    );
};

export default UserContainer;
