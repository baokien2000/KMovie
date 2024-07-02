import React from "react";

const Description = ({ content }: { content: string }) => {
    return (
        <div className="flex-1 p-3    bg-cardBackground space-y-2 sm:rounded">
            <h3 className="font-semibold ">Nội dung</h3>
            <hr className="border-t  border-white/20" />
            <div className=" text-sm overflow-auto customScrollBar max-h-[300px]" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default Description;
