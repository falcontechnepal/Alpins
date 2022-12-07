import React from "react";
import { Parallax } from "react-parallax";
import Herotext from "./Herotext";

const Hero = () => {
  const bg = "https://res.cloudinary.com/dxp4ne8fl/image/upload/v1670324650/annapurna-base-camp_aw2e8n.jpg";
  return (
    <Parallax
      bgImage={bg}
      strength={-100}>
      <Herotext />
    </Parallax>
  );
};

export default Hero;
