import React from "react";
import Reviewcar from "./Reviewcar";

const Review = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="leftBody col-md-8 col-sm-12">
          <div className="row row-cols-1 row-cols-md-1 row-cols-sm-1 row-cols-lg-2">
            <div className="col">
              <p>The ancient Himalayas is one of the most preferred traveling agencies in Nepal. You can choose among the multiple packages we provide to spend your precious time that can be the best for your lifetime. Nepal is a country where the tourism industry is one of the biggest industries which means you’ll have plenty of travel during your visit. We provide the best packages, itineraries, and varieties of services to make you satisfied throughout the journey</p>
            </div>
            <div className="col">
              <p>The Ancient Himalayas offer a remarkable journey to enjoy the majestic Himalayas with a diversified culture. Nepal, a country with thousands of destinations for trekking and hiking, is the best destination to enjoy your splendid time in nature.</p>
            </div>
          </div>
        </div>
        <div className="rightBody col-md-4 col-sm-12">
          <Reviewcar />
        </div>
      </div>
    </div>
  );
};

export default Review;
