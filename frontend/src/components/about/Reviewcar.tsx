import React from "react";
import Slider from "react-slick";
import { review } from "./reviewSource";
import Image from "next/image";

const Reviewcar = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: "liner",
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
  };
  return (
    <Slider {...settings}>
      {review.map((review, index) => (
        <div key={index}>
          <div className="card p-4 text-bg-primary border-0">
            <div className="card-text">{review.review}</div>
          </div>
          <div
            className="arrowDown"
            style={{
              width: "0",
              height: "0",
              borderLeft: "20px solid transparent",
              borderRight: "0px solid transparent",
              borderTop: "20px solid #0d6efd",
              marginLeft: "15px",
            }}></div>
          <div className="d-flex flex-row mt-3 gap-2">
            <Image
              src={review.photo}
              width={70}
              height={70}
              className="rounded-circle"
              objectFit="cover"
              alt=""
            />
            <div className="name">
              <h4 className="h4 fw-bold">{review.name}</h4>
              <span>{review.post}</span>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Reviewcar;
