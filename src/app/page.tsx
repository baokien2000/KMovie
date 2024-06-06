import Header from "@/components/header";
import NewMovies from "@/container/home/new-movies";
import RecommendedMovies from "@/container/home/recommended-movies";
import Text from "@/components/text";
import { getKMovie } from "@/services/movies";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params, searchParams }: { params: { slug: string }; searchParams?: { [key: string]: string | undefined } }) {
    console.count("movies");
    return (
        <main className="p-6  ">
            <RecommendedMovies />
            <NewMovies searchParams={searchParams} />
        </main>
    );
}
