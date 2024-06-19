import { ReactNode, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Lincese from "@/containers/footer/lincese";
import AuthProvider from "@/providers/auth-provider";
import ReactQueryProvider from "./react-query-provider";
import Header from "@/containers/header";
import { HandleOnComplete } from "@/lib/router-events";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ReactQueryProvider>
                <AuthProvider>
                    <Header />
                    <div className=" max-w-screen-laptop mx-auto w-full h-full  ">{children}</div>
                </AuthProvider>
            </ReactQueryProvider>
            <Toaster containerClassName="text-xs sm:text-sm " />
            <Lincese />
            <HandleOnComplete />
        </>
    );
};

export default LayoutProvider;
