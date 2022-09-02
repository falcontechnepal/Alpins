import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Tabs from "../components/Food/Tabs";
// import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      {/* <HeroCarousel /> */}
      <Hero />
      <Tabs />
    </div>
  );
};

export default Home;
