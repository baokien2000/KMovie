import React, { Suspense } from "react";
import { Metadata } from "next";
import UserContainer from "@/containers/user";
import UserContainerSkeleton from "@/containers/user/user-container-skeleton";

interface PageProps {
    params: {
        slug: string;
    };
}
export async function generateMetadata(): Promise<Metadata> {
    return { title: "Thông tin cá nhân" };
}

export default async function Page() {
    return (
        <main className="md:p-6 sm:p-3 py-3  space-y-3 ">
            <Suspense fallback={<UserContainerSkeleton />}>
                <UserContainer />
            </Suspense>
        </main>
    );
}
