"use client";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import SearchItem from "./search-item";
import { useDebounce } from "@uidotdev/usehooks";
import { searchKMovie } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";
import { LoadingIcon, SearchIcon, XIcon } from "../../../../public/static/svg";
import { Link } from "@/lib/router-events";
import Input from "@/components/UI/input";
import { useOutsideClick } from "@/hook/useOutsideClick";
import { IMovie } from "@/interface/movies";
import { useDeviceSize } from "@/hook/useDeviceSize";

export default function SearchMovieDropdown() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    const [isOpen, setIsOpen] = useState(false);
    const [width, height] = useDeviceSize();
    const refOutsideClick = useOutsideClick(() => {
        setIsOpen(false);
    }, true);
    const { data: movies, isLoading } = useQuery({
        queryKey: ["search-movie", debouncedQuery],
        queryFn: async () => searchKMovie(query, 5),
        refetchOnWindowFocus: false,
        enabled: debouncedQuery.length > 0,
    });
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = width > 1024 ? "20px" : "0px";
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        }
    }, [isOpen]);
    return (
        <div className="sm:relative  w-full h-fit ">
            {isOpen && <div className="fixed left-0 top-0 h-[100svh] w-[100svw] bg-black/50 "></div>}
            <div ref={refOutsideClick}>
                <Input
                    onChange={(e) => setQuery(e.target.value)}
                    onClick={() => setIsOpen(true)}
                    ariaLabel="Search"
                    className="w-full ml-auto border rounded focus:outline-none  border-des  bg-black h-9  text-sm text-title"
                    icon={
                        <SearchIcon
                            fill="currentColor"
                            className="text-white/60 group-hover:text-white cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
                        />
                    }
                />

                <Transition
                    show={isOpen && query.length > 0}
                    leave="transition linear duration-500"
                    enter="transition linear duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className=" absolute max-sm:transition max-sm:-translate-x-1/2 sm:left-0 left-1/2 w-[calc(100svw-24px)] sm:w-full h-fit mt-3 sm:top-[100%] cursor-default rounded border  border-white/5 bg-mainBackground/95 sm:p-1 ">
                        <div className="w-full flex sm:px-3 px-2 py-2 justify-between items-center">
                            <Link href={query ? `/tim-kiem?key=${query}` : "/tim-kiem"} className="text-title text-sm hover:text-mainColor">
                                Đến trang tìm kiếm
                            </Link>
                            <XIcon className="cursor-pointer" onClick={() => setIsOpen(false)} />
                        </div>
                        <RenderMovie setIsOpen={setIsOpen} query={query} movies={movies} isLoading={isLoading} />
                    </div>
                </Transition>
            </div>
        </div>
    );
}

const RenderMovie = ({ movies, isLoading, query,setIsOpen }: { movies?: IMovie[]; isLoading: boolean; query: string,setIsOpen:(open:boolean) => void }) => {
    if (isLoading) return <LoadingIcon className="mx-auto animate-spin" />;
    if (movies && movies.length === 0) return <div className=" p-3 text-title text-xs text-center">Không tìm thấy phim theo từ khóa</div>;
    return movies?.map((movie: any) => <SearchItem onClick={() => setIsOpen(false)} key={movie._id} value={movie} />);
};
