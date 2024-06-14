import "./pagination.css";
import ReactPaginate from "react-paginate";
import MoviePaginationInput from "./movie-pagination-input";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useRouter, useSearchParams } from "next/navigation";
interface MoviePaginationProp {
    totalPage: number;
    onPageClick: (data: { selected: number }) => void;
}

const MoviePagination = ({ totalPage,onPageClick }: MoviePaginationProp) => {
    const router = useRouter();
    const searchParams = useSearchParams();


    return (
        <div className="flex text-sm  bg-[#585858] mx-auto my-[10px] overflow-hidden w-fit items-center rounded shadow-sm justify-center">
            <ReactPaginate
                nextLabel={<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />}
                onPageChange={onPageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                pageCount={totalPage}
                previousLabel={<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                forcePage={parseInt(searchParams.get("page") || "1") - 1}
                renderOnZeroPageCount={null}
            />
            <MoviePaginationInput totalPage={totalPage} />
        </div>
    );
};

// import React from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
// import MoviePaginationInput from "./movie-pagination-input";
// import { useSearchParams } from "next/navigation";
// import { cn } from "@/lib/cn";
// import { scrollToTitleId } from "@/utils/scroll";
// import Link from "next/link";
// import { PaginationButton } from "./pagination-button";
// interface MoviePaginationProp {
//     totalPage: number;
// }

// const MoviePagination = ({ totalPage }: MoviePaginationProp) => {
//     const pageParam = useSearchParams().get("page") || "1";
//     const page = parseInt(pageParam ?? 1);

//     return (
//         <div className="flex text-sm  bg-[#585858] mx-auto my-[10px] overflow-hidden w-fit items-center rounded shadow-sm justify-center">
//             <nav className="isolate flex-1  inline-flex justify-between  " aria-label="Pagination">
//                 <Link
//                     href={`?page=${page - 1}`}
//                     aria-current="page"
//                     onClick={() => scrollToTitleId("MovieListTitle")}
//                     scroll={false}
//                     className={cn(
//                         "relative z-10 inline-flex items-center   px-2 min-w-[36px] py-2  text-title hover:text-mainColor",
//                         page === 1 ? "pointer-events-none" : ""
//                     )}
//                 >
//                     <span className="sr-only">Previous</span>
//                     <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//                 </Link>
//                 <PaginationButton isCurrent={page === 1} page="1" />
//                 {totalPage > 1 && (
//                     <PaginationButton isCurrent={page === 2} page={page < 5 ? "2" : "..."} className={page > 4 ? "pointer-events-none" : ""} />
//                 )}
//                 {totalPage > 2 && (
//                     <PaginationButton isCurrent={page === 3} page={page <= 4 ? "3" : page >= totalPage - 3 ? totalPage - 6 : page - 2} />
//                 )}
//                 {totalPage > 3 && (
//                     <PaginationButton isCurrent={page === 4} page={page <= 4 ? "4" : page >= totalPage - 3 ? totalPage - 5 : page - 1} />
//                 )}{" "}
//                 {totalPage > 4 && (
//                     <PaginationButton
//                         isCurrent={page < totalPage - 3 && page > 5}
//                         page={page >= totalPage - 3 ? totalPage - 4 : page > 4 ? page : 5}
//                     />
//                 )}{" "}
//                 {totalPage > 5 && (
//                     <PaginationButton isCurrent={page === totalPage - 3} page={page <= 4 ? 6 : page >= totalPage - 3 ? totalPage - 3 : page + 1} />
//                 )}{" "}
//                 {totalPage > 6 && (
//                     <PaginationButton isCurrent={page === totalPage - 2} page={page <= 4 ? 7 : page >= totalPage - 3 ? totalPage - 2 : page + 2} />
//                 )}{" "}
//                 {totalPage > 7 && (
//                     <PaginationButton
//                         isCurrent={page === totalPage - 1}
//                         page={page >= totalPage - 3 ? totalPage - 1 : "..."}
//                         className={page < totalPage - 3 ? "pointer-events-none" : ""}
//                     />
//                 )}
//                 {totalPage > 8 && <PaginationButton page={totalPage} isCurrent={page === totalPage} />}
//                 <Link
//                     href={`?page=${page + 1}`}
//                     aria-current="page"
//                     onClick={() => scrollToTitleId("MovieListTitle")}
//                     scroll={false}
//                     className={cn(
//                         "relative z-10 inline-flex items-center   px-2 min-w-[36px] py-2  text-title hover:text-mainColor",
//                         page === totalPage ? "pointer-events-none" : ""
//                     )}
//                 >
//                     <span className="sr-only">Next</span>
//                     <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//                 </Link>
//             </nav>
//             <MoviePaginationInput totalPage={totalPage} />
//         </div>
//     );
// };

export default MoviePagination;
