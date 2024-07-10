import React from "react";
const MovieSlider = dynamic(() => import("@/components/movies/slider/slider"), {
    ssr: false,
    loading: () => <MoviesSliderSkeleton />,
});
import { getRecommendedMovies } from "@/services/movies";
import MoviesSliderSkeleton from "./movies-slider-skeleton";
import dynamic from "next/dynamic";
export const revalidate = 3600;
export default async function SliderContainer() {
    const recommended = await getRecommendedMovies(10);
    return <MovieSlider movies={recommended} />;
}
