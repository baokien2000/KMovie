"use client";
import { useUserStore } from "@/store/user/user.store";
import { Button } from "@headlessui/react";
import React from "react";
import { BookmarkIcon } from "../../../../public/static/svg";
import { cn } from "@/lib/cn";
import { BookmarkIcon as BookmarkSolidIcon } from "@heroicons/react/20/solid";

const Bookmark = ({ slug }: { slug: string }) => {
    const setBookmark = useUserStore((state) => state.setBookmark);
    const bookmarks = useUserStore((state) => state.bookmarks);
    const isMarked = bookmarks.includes(slug);
    const handleButtonClick = () => {
        if (bookmarks.includes(slug)) {
            setBookmark(bookmarks.filter((bookmark) => bookmark !== slug));
        } else {
            setBookmark([...bookmarks, slug]);
        }
    };
    return (
        <Button
            onClick={handleButtonClick}
            className={cn("py-1  bg-[#191919] px-3 hover:text-mainColor  rounded-md flex items-center justify-center gap-2 w-fit  ", {
                "text-mainColor ": isMarked,
            })}
        >
            {isMarked ? <BookmarkSolidIcon className="h-5 w-5" /> : <BookmarkIcon fill="currentColor" />}
            Theo dõi
        </Button>
    );
};

export default Bookmark;
