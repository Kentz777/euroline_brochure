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
        Secure <br className="md:hidden" /> Moves!!
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
        Euro Linebridge Logistics Inc, expand services when it launch the CIT
        business operations on the 1st of June 2021. The business trades as Euro
        Line Cash Solutions. Head office is located in Las Pinas City
      </motion.p>
    </section>
  );
};

export default AboutHeroSection;
