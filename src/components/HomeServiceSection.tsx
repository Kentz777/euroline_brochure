import React from "react";
import CTAButton from "./MainCTAButton";

const HomeServiceSection = () => {
  return (
    <section className="w-full bg-white text-gray-800 flex flex-row items-center justify-center h-[500px]">
      <div className="w-3/4 flex flex-col justify-between pr-2 px-4">
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            SERVICES WE OFFER
          </h2>
          <p className="text-base leading-relaxed mb-15">
            Discover our full range of secure, efficient services tailored to
            support your operations—every step of the way.
          </p>
          <CTAButton label="Call To Action" />
        </div>
      </div>

      <div className="w-1/2 h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <video
          src="/video/Cogs.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default HomeServiceSection;
