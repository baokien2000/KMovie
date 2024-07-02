"use client";
import { IServer } from "@/interface/movies";
import { cn } from "@/lib/cn";
import { Link } from "@/lib/router-events";
import { Button } from "@headlessui/react";
import React from "react";
interface MovieServerProps {
    servers: IServer[];
    serversName?: string;
    slug: string;
    currentEpisode: string;
}
const MovieServer = ({ servers, serversName, slug, currentEpisode }: MovieServerProps) => {
    // const [server, setServer] = React.useState(serversName ?? servers[0].server_name);
    const server = serversName ?? servers[0].server_name;
    return (
        <div className="my-[10px] mb-[20px] flex gap-[10px] justify-center">
            {servers.map((item, index) => {
                return (
                    <Link
                        href={`/phim/${slug}/tap-${currentEpisode}?server=${item.server_name.replace("#", "")}`}
                        key={index}
                        className={cn(
                            item.server_name === server ? "text-black bg-[#ffce4f]" : "text-default bg-[#171717]",
                            " hover:opacity-100 opacity-90 flex items-center text-sm px-3 font-bold h-9 rounded "
                        )}
                    >
                        {item.server_name}
                    </Link>
                );
            })}
        </div>
    );
};

export default MovieServer;
