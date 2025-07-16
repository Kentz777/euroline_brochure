import React, { useEffect, useState } from "react";

type LogisticsHeroSectionProps = {
  title: string;
  description: string;
  tagline?: string;
  backgroundImage?: string;
};

const ReusableHeroSection = ({
  title,
  description,
  tagline,
  backgroundImage = "/images/gradient.png",
}: LogisticsHeroSectionProps) => {
  const [bgSize, setBgSize] = useState("80%");

  useEffect(() => {
    const updateBgSize = () => {
      if (window.innerWidth >= 1280) {
        setBgSize("40%"); // xl and above
      } else if (window.innerWidth >= 1024) {
        setBgSize("120%");
      } else {
        setBgSize("120%");
      }
    };

    updateBgSize();
    window.addEventListener("resize", updateBgSize);
    return () => window.removeEventListener("resize", updateBgSize);
  }, []);

  return (
    <div
      className="w-full min-h-screen bg-center bg-no-repeat bg-cover px-6 py-16 text-center pt-[200px] md:pt-[350px] lg:pt-[250px] bg-white"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: bgSize,
      }}
    >
      <div className="max-w-lg mx-auto lg:max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold text-[#08268F] mb-12 leading-tight font-lato">
          {title}
        </h1>
        <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-xl text-[#08268F] leading-relaxed mb-12">
          {description}
        </p>
        {tagline && (
          <p className="text-md sm:text-base md:text-2xl lg:text-2xl font-semibold text-[#08268F]">
            {tagline}
          </p>
        )}
      </div>
    </div>
  );
};

export default ReusableHeroSection;
