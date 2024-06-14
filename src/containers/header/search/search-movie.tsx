import { useState } from "react";
import { SearchIcon } from "../../../../public/static/svg";
import Input from "@/components/UI/input";
import { useRouter } from "next/navigation";

export default function SearchMovie() {
    const [query, setQuery] = useState("");
    const router = useRouter();
    const handleSearch = () => {
        if (query) router.push(`/search?name=${query}`);
    };
    return (
        <div className="relative w-full h-fit ">
            <Input
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                ariaLabel="Search"
                className="w-full ml-auto border rounded focus:outline-none  border-des  bg-black h-9  text-sm text-title"
                icon={
                    <SearchIcon
                        onClick={handleSearch}
                        fill="currentColor"
                        className="text-white/60 group-hover:text-white cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
                    />
                }
            />
        </div>
    );
}
