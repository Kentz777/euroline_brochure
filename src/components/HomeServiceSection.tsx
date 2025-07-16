import React from "react";
import CTAButton from "./MainCTAButton";
import { motion } from "framer-motion";

const HomeServiceSection = () => {
  return (
    <section className="w-full bg-white text-gray-800 flex flex-row items-center justify-center h-[500px] lg:h-lvh md:h-lvh">
      <div className="w-3/4 flex flex-col justify-between pr-2 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }} // start hidden + shifted left
          whileInView={{ opacity: 1, x: 0 }} // when in viewport, fade in + move to x:0
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }} // smooth spring effect
          viewport={{ once: true, amount: 0.4 }} // only trigger once when 40% in view
        >
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#08268F] mb-4 font-lato">
            SERVICES WE OFFER
          </h2>
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-15">
            Discover our full range of secure, efficient services tailored to
            support your operations—every step of the way.
          </p>
          <CTAButton label="Call To Action" />
        </motion.div>
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
