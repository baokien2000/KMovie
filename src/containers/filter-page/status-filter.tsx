import { MovieStatus, status } from "@/enum/movies";
import { cn } from "@/lib/cn";
import { useFilterStore } from "@/store/movies/filter.store";
import React from "react";

const StatusFilter = () => {
    const currentStatus = useFilterStore((state) => state.status);
    const setStatus = useFilterStore((state) => state.setStatus);
    const handleClick = (stt: string) => {
        if (currentStatus && currentStatus === stt) {
            setStatus(null);
        } else setStatus(stt);
    };
    return (
        <div className="text-sm p-2 space-y-2">
            <h2 className="text-default font-medium">Trạng thái</h2>
            <div className="flex flex-wrap gap-1 text-[13px] ">
                {status.map((stt, index) => {
                    return (
                        <div
                            className={cn(
                                "px-2 cursor-pointer  h-9 bg-[#444444] flex items-center justify-center hover:text-black hover:bg-mainColor/95 ",
                                {
                                    "bg-mainColor text-black hover:bg-mainColor": currentStatus === stt,
                                }
                            )}
                            key={`status-${index}`}
                            onClick={() => handleClick(stt)}
                        >
                            {MovieStatus.get(stt)}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StatusFilter;
