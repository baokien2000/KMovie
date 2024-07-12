import React from "react";
import { NotFoundIcon } from "../../../public/static/svg";

const FilterNotFound = () => {
    return (
        <div className="h-fit py-6 text-dark3 text-sm w-full flex flex-col gap-3 items-center justify-center">
            <NotFoundIcon />
            <p>Không tìm thấy bộ phim nào</p>
        </div>
    );
};

export default FilterNotFound;
