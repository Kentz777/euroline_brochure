import React from "react";
import LogisticsHeroCard from "./LogisticsHeroCard";
import { TypeAnimation } from "react-type-animation";

const HomeHeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-500 md:pt-[250px] pt-[120px] lg:pt-[180px] overflow-hidden w-full">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video/Euroline.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative flex flex-col items-center justify-center text-center px-4 py-12 text-white z-10">
        <div className="max-w-2xl">
          <TypeAnimation
            sequence={[
              "Euroline",
              4000,
              "Euro Linebridge Logistics Inc.",
              6000,
            ]}
            wrapper="h1"
            speed={50}
            className="text-4xl sm:text-5xl font-bold mb-8 blur-[0.8px] font-lato"
            repeat={Infinity}
          />
          <p className="text-base sm:text-lg leading-relaxed">
            Streamline your business operations with our expert corporate
            logistics services. Tap into seamless transportation and warehousing
            solutions.
          </p>
        </div>
      </div>
      <div className="w-full relative z-10 mb-16">
        <LogisticsHeroCard />
      </div>
    </div>
  );
};

export default HomeHeroSection;
