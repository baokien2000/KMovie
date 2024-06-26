"use client";
import { IServer } from "@/interface/movies";
import { cn } from "@/lib/cn";
import { Button } from "@headlessui/react";
import React from "react";
interface MovieServerProps {
    servers: IServer[];
}
const MovieServer = ({ servers }: MovieServerProps) => {
    const [server, setServer] = React.useState(servers[0].server_name);
    return (
        <div className="my-[10px] mb-[20px] flex gap-[10px] justify-center">
            {servers.map((item, index) => {
                return (
                    <Button
                        onClick={() => setServer(item.server_name)}
                        key={index}
                        className={cn(
                            item.server_name === server ? "text-black" : "text-default",
                            " hover:opacity-100 opacity-90 text-sm px-3 font-bold h-9 rounded bg-[#ffce4f]"
                        )}
                    >
                        {item.server_name}
                    </Button>
                );
            })}
        </div>
    );
};

export default MovieServer;
