import React from "react";
import { NotFoundIcon } from "../../../public/static/svg";

const SearchNotFound = ({ keyword }: { keyword?: string }) => {
    return (
        <div className="h-[350px] text-dark3 text-sm w-full flex flex-col gap-3 items-center justify-center">
            <NotFoundIcon />
            <p>
                Không tìm thấy phim theo từ khóa <b>{keyword}</b>
            </p>
        </div>
    );
};

export default SearchNotFound;
