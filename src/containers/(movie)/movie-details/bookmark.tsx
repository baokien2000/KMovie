"use client";
import { Button } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { BookmarkIcon, LoadingIcon } from "../../../../public/static/svg";
import { cn } from "@/lib/cn";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/20/solid";
import { useAuthStore } from "@/store/auth/auth.store";
import toast from "react-hot-toast";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { addBookmark, checkMovieIsMarked, removeBookmark } from "@/services/movies";

const Bookmark = ({ slug }: { slug: string }) => {
    const [loading, setLoading] = useState(false);
    const [requestLimit, setRequestLimit] = useState(0);
    const user = useAuthStore((state) => state.user);
    const { data: isMarked, isFetching } = useQuery({
        queryKey: ["is-marked", user?._id, slug],
        queryFn: async () => checkMovieIsMarked(user?._id!, slug),
        refetchOnWindowFocus: false,
        enabled: (user?._id?.length ?? 0) > 0,
    });
    const queryClient = useQueryClient();
    const handleButtonClick = async () => {
        if (!user?._id) {
            toast.error("Vui lòng đăng nhập để thực hiện chức năng này");
            return;
        }
        if (requestLimit >= 3) {
            toast.error("Bạn thao tác quá nhanh, vui lòng thử lại sau!");
            setRequestLimit((prev) => prev + 1);
            return;
        }
        try {
            setLoading(true);
            const res = isMarked ? await removeBookmark(user?._id!, slug) : await addBookmark(user?._id!, slug);

            if (res) {
                toast.success(isMarked ? "Đã bỏ theo dõi" : "Đã thêm vào danh sách theo dõi");
            } else {
                toast.error("Có lỗi xảy ra");
            }
        } catch (error) {
            toast.error("Có lỗi xảy ra");
        } finally {
            queryClient.invalidateQueries({
                queryKey: ["is-marked", user?._id, slug],
            });
            setLoading(false);
            setRequestLimit((prev) => prev + 1);
            console.log("requestLimit", requestLimit);
        }
    };
    return (
        <Button
            onClick={handleButtonClick}
            disabled={loading || isFetching || requestLimit > 4}
            className={cn("py-1  bg-[#191919] px-3 hover:text-mainColor  rounded-md flex items-center justify-center gap-2 w-fit  ", {
                "text-mainColor ": isMarked,
            })}
        >
            {loading ? (
                <LoadingIcon />
            ) : isMarked ? (
                <BookmarkSolidIcon className="size-[22px]" />
            ) : (
                <BookmarkIcon className="size-[22px]" fill="currentColor" />
            )}{" "}
            <span className="hidden sm:inline">Theo dõi</span>
        </Button>
    );
};

export default Bookmark;
