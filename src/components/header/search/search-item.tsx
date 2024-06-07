import { imagePath } from "@/enum";
import { ComboboxOption } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
interface SearchItemProps {
    value: any;
    onClick?: () => void;
}
const SearchItem = ({ value, onClick }: SearchItemProps) => {
    return (
        <Link href={"/phim/" + value.slug} className="group flex hover:bg-white/10  cursor-pointer items-start gap-2 rounded-lg p-2 select-none ">
            <div className="relative h-14 w-14">
                <Image sizes="56px" priority={true} src={imagePath + value.thumb_url} alt={value.slug} fill className="object-cover rounded" />
            </div>
            <div className="text-sm flex flex-col gap-2 text-white">
                <p className="leading-3">{value.name}</p>
                <p className="text-title text-xs leading-3">{value.origin_name}</p>
                <p className="text-title text-xs leading-3">{value.episode_current}</p>
            </div>
        </Link>
    );
};

export default SearchItem;
