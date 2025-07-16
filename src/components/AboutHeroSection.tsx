import { motion } from "framer-motion";

const AboutHeroSection = () => {
  return (
    <section className="w-full bg-white px-6 py-16 gap-1 sm:gap-4 flex flex-col items-center text-center md:pt-[250px] pt-[120px] lg:pt-[180px] font-lato min-h-screen">
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#08268F] mb-6 font-montserrat"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Together for <br className="md:hidden" /> Success!
      </motion.h2>

      <motion.img
        src="/images/hero_about.png"
        alt="Together for Success"
        className="rounded-lg w-full max-w-md mb-6 object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      />

      <motion.p
        className="text-base md:text-lg lg:text-xl text-[#08268F] max-w-lg"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        At Euro Linebridge Logistics, we help businesses grow by combining
        creativity, innovation, and data-driven strategies. Together, we build a
        future of shared success.
      </motion.p>
    </section>
  );
};

export default AboutHeroSection;
