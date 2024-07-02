import Action from "@/containers/(movie)/movie-details/action";
import CommentList from "@/containers/(movie)/movie-comment";
import Description from "@/containers/(movie)/movie-details/description";
import Info from "@/containers/(movie)/movie-details/info";
import { getMovieBySlug } from "@/services/movies";
import React, { Suspense } from "react";
import EpisodesList from "@/containers/(movie)/movie-details/episodes";
import { Metadata } from "next";
import Image from "next/image";
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
