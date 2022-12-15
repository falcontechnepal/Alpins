import Image from "next/image";
import React from "react";

const TeamMemberCard = () => {
  const img = "https://res.cloudinary.com/dxp4ne8fl/image/upload/v1670324651/mansalu-circuit_i8kztg.jpg";
  return (
    <div className="container-fluid pt-5">
      <div className="container ">
        <div className="row container mt-5">
          {/* Card1 */}
          <div className=" col-12 col-sm-12 col-md-6">
            <div className="row ">
              <div className="col-12   col-md-12  col-lg-12   col-xl-12  col-xxl-5 mb-3">
                <Image
                  src={img}
                  className=" flex-shrink-0 me-3 teamImg"
                  alt="..."
                />
              </div>
              <div className="col-12   col-md-12  col-lg-12  col-xl-12 col-xxl-7 mb-5">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like,</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12   col-md-6">
            <div className="row ">
              <div className="col-12   col-md-12  col-lg-12   col-xl-12  col-xxl-5  mb-3">
                <Image
                  src={img}
                  className=" flex-shrink-0 me-3 teamImg"
                  alt="..."
                />
              </div>
              <div className="col-12   col-md-12  col-lg-12  col-xl-12 col-xxl-7  mb-5">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like,</p>
              </div>
            </div>
          </div>

          {/* Card2 */}
          <div className="col-12 col-sm-12   col-md-6">
            <div className="row ">
              <div className="col-12   col-md-12  col-lg-12   col-xl-12  col-xxl-5  mb-3">
                <Image
                  src={img}
                  className=" flex-shrink-0 me-3 teamImg"
                  alt="..."
                />
              </div>
              <div className="col-12   col-md-12  col-lg-12  col-xl-12 col-xxl-7  mb-5">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like,</p>
              </div>
            </div>
          </div>

          {/* Card3 */}
          <div className="col-12 col-sm-12   col-md-6">
            <div className="row ">
              <div className="col-12   col-md-12  col-lg-12   col-xl-12  col-xxl-5  mb-3">
                <Image
                  src={img}
                  className=" flex-shrink-0 me-3 teamImg"
                  alt="..."
                />
              </div>
              <div className="col-12   col-md-12  col-lg-12  col-xl-12 col-xxl-7   mb-5">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like,</p>
              </div>
            </div>
          </div>

          {/* Card4 */}
          <div className="col-12 col-sm-12   col-md-6">
            <div className="row ">
              <div className="col-12   col-md-12  col-lg-12   col-xl-12  col-xxl-5 mb-3 ">
                <Image
                  src={img}
                  className=" flex-shrink-0 me-3 teamImg"
                  alt="..."
                />
              </div>
              <div className="col-12   col-md-12  col-lg-12  col-xl-12 col-xxl-7   mb-5">
                <h3 className="h3 mainColor">Lokendra Chaulagain</h3>
                <h6 className="h6 mainColor">MERN Dtack Developer</h6>
                <p className="paraColor">This is some placeholder content for the custom component. It is intended to mimic what some real-world content would look like,</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
