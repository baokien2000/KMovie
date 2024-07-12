import { cn } from "@/lib/cn";
import { Link } from "@/lib/router-events";
import React from "react";
interface LinkListProps {
    title: string;
    links: {
        name: string;
        href: string;
    }[];
    className?: string;
}
const LinkList = ({ links, title ,className}: LinkListProps) => {
    return (
        <div className={cn("text-[13px] flex flex-col  gap-2 w-full laptopSmall:w-fit", className)}>
            <h3 className="text-base text-default">{title}</h3>
            {links.map((link) => (
                <Link className="text-mainColor" key={link.name} href={link.href}>
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default LinkList;
