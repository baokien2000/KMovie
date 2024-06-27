import React from "react";
interface MovieListTitleProps {
    title: string | JSX.Element;
    id?: string;
}
const MovieListTitle = ({ title, id }: MovieListTitleProps) => {
    return (
        <div id={id} className="bg-[#242525] ">
            <h1
                id={`Kmovie-${id}`}
                className="relative after:absolute after:left-full after:top-0 after:content-[''] after:border-black after:border-[20px] after:border-transparent after:border-l-black inline-block text-dark3 text-[15px] font-bold bg-black px-[20px] h-[40px] leading-[40px] "
            >
                {title}
            </h1>
        </div>
    );
};

export default MovieListTitle;
