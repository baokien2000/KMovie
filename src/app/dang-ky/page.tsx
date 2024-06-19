import { Metadata } from "next";
import React from "react";
export async function generateMetadata(): Promise<Metadata> {
    return {
        title: `Trang đăng ký - kmovies`,
    };
}
export default async function Page() {
    return (
        <main className="p-6 py-4 space-y-3">
            <div>Dang ky</div>
        </main>
    );
}
