"use client";
import PageTransition from "@/HOCs/pageTransition";
import React from "react";

const Text = ({ page }: { page: string }) => {
    return (
        <PageTransition>
            <div className="w-full text-white text-3xl h-[calc(100svh-70px)]  flex items-center justify-center">{page}</div>
        </PageTransition>
    );
};

export default Text;
