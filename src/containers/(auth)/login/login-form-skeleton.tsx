import React from "react";

const LoginFormSkeleton = () => {
    return (
        <form className="  text-sm  text-default p-6 w-[400px]">
            <div className="mb-3 bg-black  h-9   outline-none w-full px-3 py-2 animate-pulse" />
            <div className="mb-6 bg-black h-9     outline-none w-full  px-3 py-2 animate-pulse" />
            <div className="bg-mainColor/90 h-9   animate-pulse w-full p-2" />
        </form>
    );
};

export default LoginFormSkeleton;
