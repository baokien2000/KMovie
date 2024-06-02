// import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
// import { useState } from "react";
// import SearchItem from "./search-item";
// import SearchMovieInput from "./search-input";
// import { useDebounce } from "@uidotdev/usehooks";
// import { getKMovie, searchKMovie } from "@/services/movies";
// import { useQuery } from "@tanstack/react-query";
// import { XIcon } from "../../../../public/static/svg";
// import Link from "next/link";

// export default function SearchMovie() {
//     const [query, setQuery] = useState("");
//     const debouncedQuery = useDebounce(query, 1000);

//     console.log("query", query);
//     const { data: movies, isLoading } = useQuery({
//         queryKey: ["search-movie", debouncedQuery],
//         queryFn: async () => searchKMovie(query),
//     });
//     console.log("search-movie", movies);

//     return (
//         <Combobox value={query} onChange={(value) => setQuery(value ?? "")}>
//             <SearchMovieInput query={query} setQuery={setQuery} />
//             <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
//                 <ComboboxOptions
//                     anchor="bottom"
//                     className="w-[var(--input-width)] !cursor-default rounded border mt-2 border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] "
//                 >
//                     <div className="w-full flex p-3 py-2 justify-between items-center">
//                         <Link href="/search" className="text-[#cac9c9]">
//                             Đến trang tìm kiếm
//                         </Link>
//                         <XIcon className="cursor-pointer" onClick={() => setQuery("")} />
//                     </div>
//                     <RenderMovie query={query} movies={movies} isLoading={isLoading} />
//                 </ComboboxOptions>
//             </Transition>
//         </Combobox>
//     );
// }

// const RenderMovie = ({ movies, isLoading, query }: { movies?: any[]; isLoading: boolean; query: string }) => {
//     if (isLoading) return <div> Loading...</div>;
//     if (movies && movies.length === 0)
//         return (
//             <div>
//                 <div className="text-white">No movie found</div>
//             </div>
//         );
//     return movies?.map((movie: any) => <SearchItem key={movie._id} value={movie} />);
// };

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import SearchItem from "./search-item";
import SearchMovieInput from "./search-input";
import { useDebounce } from "@uidotdev/usehooks";
import { getKMovie, searchKMovie } from "@/services/movies";
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
    console.log("query", query);
    const { data: movies, isLoading } = useQuery({
        queryKey: ["search-movie", debouncedQuery],
        queryFn: async () => searchKMovie(query, 5),
    });
    console.log("search-movie", movies);
    return (
        <div className="relative w-full h-fit " ref={refOutsideClick}>
            {/* <SearchMovieInput query={query} setQuery={setQuery} /> */}
            <Input
                onChange={(e) => setQuery(e.target.value)}
                onClick={() => setIsOpen(true)}
                // onIconClick={() => setQuery("")}
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
