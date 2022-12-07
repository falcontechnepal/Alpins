import React from "react";
import Slider from "react-slick";
import style from "../styles/scss/HeroCarousel.module.scss";
import Image from "next/image";
import packages from "../packages.json"

const HeroCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    easing: "linear",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className={`${style.cover} container my-5 gap-5`}>
      <Slider
        {...settings}
        className={`${style.slider} d-flex gap-5`}>
        {packages &&
          packages.map((packages: any, index: any) => (
            <div
              key={index}
              className={`${style.carasoule}`}>
              <div className={`${style.image}`}>
                <Image
                  src={packages.image}
                  height={200}
                  width={300}
                  className=" rounded"
                  alt=""
                />
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
