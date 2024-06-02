import { cn } from "@/lib/cn";
import { ComboboxButton, ComboboxInput } from "@headlessui/react";
import React from "react";
import { SearchIcon } from "../../../../public/static/svg";
interface SearchMovieInputProps {
    setQuery: (value: string) => void;
    query: string;
}
const SearchMovieInput = ({ setQuery }: SearchMovieInputProps) => {
    return (
        <div className="relative w-full ">
            <ComboboxInput
                className={cn("w-full border rounded  border-des  bg-black h-9  py-1.5 pr-8 pl-3 text-sm/6 text-title", "focus:outline-none  ")}
                // displayValue={(person: any) => person?.name}
                displayValue={(movie: any) => movie?.name ?? movie}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        console.log("Enter key pressed");
                    }
                }}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                <SearchIcon fill="currentColor" className="text-white/60 group-hover:text-white" />
            </ComboboxButton>
        </div>
    );
};

export default SearchMovieInput;
