import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import person1 from "../../public/images/6.jpeg";


// import "./styles.css";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

export default function Test() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /></SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 2</SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 3</SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 4</SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 5</SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 6</SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 7</SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 8</SwiperSlide>
        <SwiperSlide> <Image src={person1} className=" rounded" alt="" /> 9</SwiperSlide>
      </Swiper>
    </>
  );
}
