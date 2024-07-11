"use client";
import { Scrollbar, A11y, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/scrollbar";
import "./style.css";
import { IMovie, IMovieSlide } from "@/interface/movies";
import MovieCard from "../card/movie-card";
import { memo } from "react";

const MovieSlider = (props: {
    movies: IMovieSlide;
}) => {
    const { movies } = props;
    return (
        <Swiper
            // @ts-ignore
            modules={[FreeMode, Scrollbar, A11y, Autoplay]}
            loop={true}
            speed={1000}
            freeMode={true}
            scrollbar={{
                hide: false,
            }}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 4 }, // when window width is >= 640px
                320: { slidesPerView: 2, spaceBetween: 4 }, // when window width is >= 768px
                500: { slidesPerView: 3, spaceBetween: 4 }, // when window width is >= 768px
                640: { slidesPerView: 4, spaceBetween: 8 }, // when window width is >= 768px
                768: { slidesPerView: 5, spaceBetween: 8 }, // when window width is >: 768px
                1024: { slidesPerView: 6, spaceBetween: 8 }, // when window width is >: 768px
            }}
        >
            {movies?.movies.map((item, index) => (
                <SwiperSlide className="aspect-[3/4]" key={item._id}>
                    <MovieCard
                        enableBlur
                        quality={50}
                        key={item._id}
                        loading={index < 6 ? "eager" : "lazy"}
                        movie={item}
                        ImagePath={movies.pathImage}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default memo(MovieSlider);
