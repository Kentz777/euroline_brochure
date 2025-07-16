import React from "react";
import CTAButton from "./MainCTAButton";
import { motion } from "framer-motion";

const HomeJobOpeningsSection = () => {
  return (
    <section className="relative w-full h-[400px] flex items-center justify-center text-center overflow-hidden lg:h-lvh md:h-lvh">
      <img
        src="/images/job_opening_hero.png"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

      <motion.div
        initial={{ opacity: 0, x: -100 }} // start hidden + shifted left
        whileInView={{ opacity: 1, x: 0 }} // when in viewport, fade in + move to x:0
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }} // smooth spring effect
        viewport={{ once: true, amount: 0.4 }} // only trigger once when 40% in view
        className="relative z-10 px-6 py-10"
      >
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-blue-900 mb-4 font-lato">
          JOB OPENINGS
        </h2>
        <p className="text-gray-700 text-base md:text-xl lg:text-3xl mb-6 max-w-lg mx-auto">
          Join a growing team committed to excellence, innovation, and
          delivering real impact across industries.
        </p>
        <div className="flex justify-center">
          <CTAButton label="Call To Action" />
        </div>
      </motion.div>
    </section>
  );
};

export default HomeJobOpeningsSection;
