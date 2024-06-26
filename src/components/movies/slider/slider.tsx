"use client";
import { Scrollbar, A11y, Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/scrollbar";
import "./style.css";
import { ImovieList } from "@/interface/movies";
import MovieCard from "../card/movie-card";
import { memo } from "react";

const MovieSlider = (props: { movies: ImovieList }) => {
    const { movies } = props;
    return (
        <Swiper
            // @ts-ignore
            modules={[FreeMode, Scrollbar, A11y, Autoplay]}
            loop={true}
            speed={500}
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
                0: { slidesPerView: 1, spaceBetween: 5 }, // when window width is >= 640px
                360: { slidesPerView: 2, spaceBetween: 20 }, // when window width is >= 768px
                1023: { slidesPerView: 4, spaceBetween: 20 }, // when window width is >: 768px
                1223: { slidesPerView: 6, spaceBetween: 20 }, // when window width is >: 768px
            }}
        >
            {movies?.items?.map((item, index) => (
                <SwiperSlide key={item._id}>
                    <MovieCard
                        enableBlur
                        quality={50}
                        key={item._id}
                        loading={"lazy"}
                        movie={item}
                        ImagePath={movies.pathImage}
                        className="w-full h-72"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default memo(MovieSlider);
