import React from "react";
import MovieSlider from "@/components/movies/slider/slider";
import { getRecommendedMovies } from "@/services/movies";
export const revalidate = 3600;
export default async function SliderContainer() {
    const recommended = await getRecommendedMovies(10);
    return <MovieSlider movies={recommended} />;
}
