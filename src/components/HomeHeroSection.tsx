import React from "react";
import LogisticsHeroCard from "./LogisticsHeroCard";

const HomeHeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-500 pt-[120px] lg:pt-[180px] overflow-hidden w-full">
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 blur-[0.8px]">
            Euro Linebridge Logistics
          </h1>
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
