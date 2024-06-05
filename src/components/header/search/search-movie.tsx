import { Transition } from "@headlessui/react";
import { useState } from "react";
import SearchItem from "./search-item";
import { useDebounce } from "@uidotdev/usehooks";
import { searchKMovie } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";
import { LoadingIcon, SearchIcon, XIcon } from "../../../../public/static/svg";
import Link from "next/link";
import Input from "@/components/UI/input";
import { useOutsideClick } from "@/hook/useOutsideClick";

export default function SearchMovie() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 500);
    const [isOpen, setIsOpen] = useState(false);
    const refOutsideClick = useOutsideClick(() => {
        setIsOpen(false);
    }, true);
    const { data: movies, isLoading } = useQuery({
        queryKey: ["search-movie", debouncedQuery],
        queryFn: async () => searchKMovie(query, 5),
    });
    return (
        <div className="relative w-full h-fit " ref={refOutsideClick}>
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
                <div className=" absolute left-0 w-full h-fit mt-3 top-[100%] cursor-default rounded border  border-white/5 bg-mainBackground p-1 ">
                    <div className="w-full flex p-3 py-2 justify-between items-center">
                        <Link href="/search" className="text-title">
                            Đến trang tìm kiếm
                        </Link>
                        <XIcon className="cursor-pointer" onClick={() => setIsOpen(false)} />
                    </div>
                    <RenderMovie query={query} movies={movies} isLoading={isLoading} />
                </div>
            </Transition>
        </div>
    );
}

const RenderMovie = ({ movies, isLoading, query }: { movies?: any[]; isLoading: boolean; query: string }) => {
    if (isLoading) return <LoadingIcon className="mx-auto animate-spin" />;
    if (movies && movies.length === 0) return <div className=" p-3 text-title text-xs text-center">Không tìm thấy phim theo từ khóa</div>;
    return movies?.map((movie: any) => <SearchItem key={movie._id} value={movie} />);
};
