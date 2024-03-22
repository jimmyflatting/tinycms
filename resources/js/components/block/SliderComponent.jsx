import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function SliderComponent({ props }) {
    return (
        <>
            <p>SliderComponent</p>
            <Swiper spaceBetween={50} slidesPerView={3}>
                {props.images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt="image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
