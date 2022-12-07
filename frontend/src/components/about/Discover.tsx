import React from "react";
import Discovercar from "./Discovercar";

const Discover = () => {
  return (
    <div className="container my-5">
      <div className="row row-md-cols-1 row-lg-cols-1">
        <div className="left col-lg-3 mb-5">
          <div>
            <h1 className="h2 fw-bold">Discover Us</h1>
            <p>Our main services</p>
          </div>
          <div>
            <p>We provide you with an experienced team helping you throughout your journey to complete your trip with comfort and fun.</p>

            <p className="mt-3">We have a successful team of guides and experts who are very enthusiastic about trekking and hiking uphill</p>
          </div>
        </div>
        <div className="col-lg-9">
          <Discovercar />
        </div>
      </div>
    </div>
  );
};

export default Discover;
