import React from "react";
interface MovieListTitleProps {
    title: string;
    id?: string;
}
const MovieListTitle = ({ title, id }: MovieListTitleProps) => {
    return (
        <div id={id} className="bg-[#242525]">
            <div className="relative after:absolute after:left-full after:top-0 after:content-[''] after:border-black after:border-[20px] after:border-transparent after:border-l-black inline-block text-dark3 text-[17px] font-bold bg-black px-[20px] h-[40px] leading-[40px] ">
                {title}
            </div>
        </div>
    );
};

export default MovieListTitle;
