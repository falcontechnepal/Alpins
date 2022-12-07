import React from "react";
import Slider from "react-slick";
import services from "../../packages.json";

const Timelinecar = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {services.map((services, index) => (
          <div
            key={index}
            className="d-sm-flex align-items-center gap-4">
            <div className="time">
              <h4 className="h6 fw-bold">{services.price}</h4>
              <p className="h4 fw-bold">Days:{services.days}</p>
            </div>
            <div className="desc">
              <h5 className="h5 fw-bold">{services.id}</h5>
              <p>{services.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Timelinecar;
