import Image from "next/image";
import { GrMapLocation } from "react-icons/gr";
import packages from "../../packages.json";

import Link from "next/link";

const TrekCard = () => {
  return (
    <>
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
        {packages.map((packages: any, index: any) => (
          <div
            key={index}
            className="col">
            <div className="card-group">
              <div className="card p-0 mb-5 border-0 shadow rounded">
                <Image
                  src={packages.image}
                  alt=""
                  width={500}
                  height={200}
                  objectFit="cover"
                />
                <div
                  className="rounded-bottom"
                  style={{ backgroundColor: "#12314a" }}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <h3 className="primaryColor h5">{packages.days}</h3>
                        <p className="whiteColor">Duration</p>
                      </div>
                      <div className="">
                        <h3 className="primaryColor h5">{packages.groupSize}</h3>
                        <p className="whiteColor">Group Size</p>
                      </div>
                      <div className="">
                        <h3 className="primaryColor h5">{packages.difficultyLevel}</h3>
                        <p className="whiteColor">Difficulty</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* --------- */}
                <div className="card-body p-3">
                  <h4 className="mainColor pt-3   h4 fw-bold upper_case ">{packages.id}</h4>
                  <p className="mainColor pt-3 lh-lg  card-text">{packages.description}</p>
                  <div className="col">
                    <h6 className="primaryColor h6 ">
                      <GrMapLocation
                        style={{ fontSize: "20px" }}
                        className="primaryColor me-4"
                      />
                      {packages.id}
                    </h6>
                    <Link href={`/trek/${packages.id}`}
                      className="link">
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrekCard;
