import React from "react";
import HomeHeroSection from "../../components/HomeHeroSection";
import HomeServiceSection from "../../components/HomeServiceSection";
import HomeServicesListSection from "../../components/HomeServicesListSection";
import HomeJobOpeningsSection from "../../components/HomeJobOpeningsSection";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeServiceSection />
      <HomeServicesListSection />
      <HomeJobOpeningsSection />
    </>
  );
};

export default Home;
