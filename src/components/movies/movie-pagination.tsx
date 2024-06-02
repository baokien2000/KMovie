import React from "react";
import { SearchIcon, SendIcon } from "../../../public/static/svg";
import { Disclosure, DisclosureButton, DisclosurePanel, Input } from "@headlessui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import MoviePaginationInput from "./movie-pagination-input";
interface MoviePaginationProp {
    totalPage: number;
}
const MoviePagination = ({ totalPage }: MoviePaginationProp) => {
    return (
        <div className="flex bg-[#585858] mx-auto my-[10px] overflow-hidden w-fit items-center rounded shadow-sm justify-center">
            <nav className="isolate flex-1  inline-flex justify-between  " aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center  px-2 py-2 text-gray-400 hover:text-mainColor ">
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                </a>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                <a
                    href="#"
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-mainColor  px-4 py-2 text-sm font-semibold text-black "
                >
                    1
                </a>
                <a href="#" className="relative inline-flex items-center  px-4 py-2 text-gray-400 hover:text-mainColor ">
                    2
                </a>
                <a href="#" className="relative inline-flex items-center  px-4 py-2 text-gray-400 hover:text-mainColor ">
                    3
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-400">...</span>
                <a href="#" className="relative inline-flex items-center  px-4 py-2 text-gray-400 hover:text-mainColor ">
                    8
                </a>
                <a href="#" className="relative inline-flex items-center  px-4 py-2 text-gray-400 hover:text-mainColor ">
                    9
                </a>
                <a href="#" className="relative inline-flex items-center  px-4 py-2 text-gray-400 hover:text-mainColor ">
                    10
                </a>
                <a href="#" className="relative inline-flex items-center  px-2 py-2 text-gray-400 hover:text-mainColor ">
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                </a>
            </nav>
            <MoviePaginationInput totalPage={totalPage} />
        </div>
    );
};

export default MoviePagination;
