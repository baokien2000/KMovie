import { cn } from "@/lib/cn";
import React from "react";
import "./loading.css";
const ProcessLoading = ({ className }: { className?: string }) => {
    return <div className={cn("loadingText", className)} />;
};

export default ProcessLoading;
