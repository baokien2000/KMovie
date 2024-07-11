import { SearchIcon } from "../../../../public/static/svg";
import Input from "@/components/UI/headless/icon-input";

export default function SearchMovieSkeleton() {
    return (
        <div className="relative w-full h-fit ">
            <Input
                ariaLabel="Search"
                className="w-full ml-auto border rounded focus:outline-none  border-des  bg-black h-9  text-sm text-title"
                icon={
                    <SearchIcon
                        fill="currentColor"
                        className="text-white/60 group-hover:text-white cursor-pointer absolute right-2 top-1/2 transform -translate-y-1/2"
                    />
                }
            />
        </div>
    );
}
