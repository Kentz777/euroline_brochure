"use client";

import { useEffect } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

const Counter = ({ end, suffix = "", duration = 2 }: CounterProps) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest) + suffix);

  useEffect(() => {
    const controls = animate(count, end, { duration });
    return () => controls.stop();
  }, [count, end, duration]);

  return <motion.span>{rounded}</motion.span>;
};

const AboutReviews = () => {
  return (
    <section className="flex flex-col items-center px-4 py-12 text-center font-lato">
      <h2 className="text-3xl md:text-5xl font-bold text-[#08268F] mb-8">
        Why Trust Euroline
        <br />
        Cash Solutions?
      </h2>

      <div className="w-full max-w-lg bg-gradient-to-b from-[#08268F] to-[#00BFFF] rounded-[2rem] text-white shadow-lg">
        {/* Item 1 */}
        <div className="py-6 border-b border-white/20">
          <p className="text-4xl font-bold">
            <Counter end={8} suffix="+" duration={7} />
          </p>
          <p className="text-sm mt-1">Years of Experience</p>
        </div>
        {/* Item 2 */}
        <div className="py-6 border-b border-white/20">
          <p className="text-4xl font-bold">
            <Counter end={50} suffix="+" duration={7.5} />
          </p>
          <p className="text-sm mt-1">Experts</p>
        </div>
        {/* Item 3 */}
        <div className="py-6 border-b border-white/20">
          <p className="text-4xl font-bold">
            <Counter end={100} suffix="+" duration={9} />
          </p>
          <p className="text-sm mt-1">Successful Campaigns</p>
        </div>
        {/* Item 4 */}
        <div className="py-6 border-b border-white/20">
          <p className="text-4xl font-bold">
            <Counter end={20} suffix="+" duration={7.5} />
          </p>
          <p className="text-sm mt-1">Industry Awards</p>
        </div>
        {/* Item 5 */}
        <div className="py-6">
          <p className="text-4xl font-bold">
            <Counter end={500} suffix="%" duration={7} />
          </p>
          <p className="text-sm mt-1">RDI for our clients</p>
        </div>
      </div>
    </section>
  );
};

export default AboutReviews;
