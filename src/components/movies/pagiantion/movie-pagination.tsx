import "./pagination.css";
import ReactPaginate from "react-paginate";
import MoviePaginationInput from "./movie-pagination-input";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import { useDeviceSize } from "@/hook/useDeviceSize";
interface MoviePaginationProp {
    totalPage: number;
    onPageClick: (data: { selected: number }) => void;
}

const MoviePagination = ({ totalPage, onPageClick }: MoviePaginationProp) => {
    const searchParams = useSearchParams();
    const [width, height] = useDeviceSize();
    return (
        <div className="flex text-sm  bg-[#585858] mx-auto my-[10px] overflow-hidden w-fit items-center rounded shadow-sm justify-center">
            <ReactPaginate
                nextLabel={<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />}
                onPageChange={onPageClick}
                pageRangeDisplayed={width > 640 ? 3 : 2}
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
            {totalPage !== 0 && <MoviePaginationInput totalPage={totalPage} />}
        </div>
    );
};
export default MoviePagination;
