"use client";
import { Button } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { BookmarkIcon } from "../../../../public/static/svg";
import { cn } from "@/lib/cn";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/20/solid";
import { useAuthStore } from "@/store/auth/auth.store";
import toast from "react-hot-toast";

const Bookmark = ({ slug }: { slug: string }) => {
    // const setBookmark = useUserStore((state) => state.setBookmark);
    // const bookmarks = useUserStore((state) => state.bookmarks);
    const user = useAuthStore((state) => state.user);
    const [bookmarks, setBookmark] = useState<string[]>([]);
    useEffect(() => {
        if (!user?._id) {
            bookmarks?.length > 0 && setBookmark([]);
            return;
        }
        const value = localStorage.getItem(user?._id + "-bookmarks");
        if (value) {
            try {
                const parsed = JSON.parse(value);
                setBookmark(parsed);
            } catch (error) {
                console.log("setBookmark error", error);
            }
        }
    }, [user?._id]);
    const isMarked = bookmarks?.includes(slug);
    const handleButtonClick = () => {
        if (!user?._id) {
            toast.error("Vui lòng đăng nhập để thực hiện chức năng này");
            return;
        }
        if (bookmarks.includes(slug)) {
            const updatedBookmarks = bookmarks.filter((bookmark) => bookmark !== slug);
            setBookmark(updatedBookmarks);
            window.localStorage.setItem(user?._id + "-bookmarks", JSON.stringify(updatedBookmarks));
        } else {
            const updatedBookmarks = [...bookmarks, slug];
            setBookmark(updatedBookmarks);
            window.localStorage.setItem(user?._id + "-bookmarks", JSON.stringify(updatedBookmarks));
        }
    };
    return (
        <Button
            onClick={handleButtonClick}
            className={cn("py-1  bg-[#191919] px-3 hover:text-mainColor  rounded-md flex items-center justify-center gap-2 w-fit  ", {
                "text-mainColor ": isMarked,
            })}
        >
            {isMarked ? <BookmarkSolidIcon className="size-[22px]" /> : <BookmarkIcon className="size-[22px]" fill="currentColor" />}
            <span className="hidden sm:inline">Theo dõi</span>
        </Button>
    );
};

export default Bookmark;
