import React from "react";

const ShelterCenterImage = () => {
  return (
    <div className="container py-5">
      <div className="row container py-5 ">
        <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 mb-5">
          <h6 className="pureWhite h6">Data</h6>
          <h1 className="pureWhite h1">25 JAN</h1>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 col-xl-3 mb-5">
          <h6 className="pureWhite h6">Distance</h6>
          <h1 className="pureWhite h1">8.5 KM</h1>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 col-xl-3 mb-5">
          <h6 className="pureWhite h6">Group size</h6>
          <h1 className="pureWhite h1">10</h1>
        </div>

        <div className="col-12 col-sm-6 col-lg-3 col-xl-3">
          <h6 className="pureWhite h6">Duration</h6>
          <h1 className="pureWhite h1">2 DAYS</h1>
        </div>
      </div>
    </div>
  );
};

export default ShelterCenterImage;
