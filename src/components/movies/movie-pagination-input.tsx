import { Disclosure, DisclosureButton, DisclosurePanel, Input } from "@headlessui/react";
import React from "react";
import { SearchIcon } from "../../../public/static/svg";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
interface MoviePaginationInputProp {
    totalPage: number;
}
const MoviePaginationInput = ({ totalPage }: MoviePaginationInputProp) => {
    const [page, setPage] = React.useState<string | undefined>();
    const router = useRouter();
    const handleRedirect = () => {
        if (page && parseInt(page ?? 1) <= totalPage) {
            const params = new URLSearchParams();
            params.set("page", page.toString());
            router.push(`/?${params.toString()}`, { scroll: false });
            document.getElementById("MovieListTitle")?.scrollIntoView({ behavior: "smooth" });
        } else {
            toast.error("Trang không tồn tại");
        }
        setPage(undefined);
    };
    return (
        <>
            <Input
                type="number"
                max={9999}
                aria-label="pagination-search"
                value={page}
                onChange={(e) => setPage(e.target.value)}
                onKeyDown={(e) => ["e", ".", ",", "-", "+"].includes(e.key) && e.preventDefault()}
                className="!outline-none flex-1 bg-transparent ml-3 w-auto max-w-[40px] text-white/80   "
                placeholder="Nhập"
            />
            <SearchIcon className="text-white/80 hover:text-mainColor mx-3 cursor-pointer" onClick={handleRedirect} fill="currentColor" />
        </>
    );
};

export default MoviePaginationInput;
