import LoginPage from "@/containers/login/login";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang đăng nhập - kmovies`,
    };
}
export default async function Page() {
    return (
        <main className="p-6 py-4 space-y-3">
            <LoginPage />
            đăng nhập
        </main>
    );
}
