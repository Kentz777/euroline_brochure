import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CTAButton from "./MainCTAButton";

type HomeServiceSectionProps = {
  buttonRoute: string;
};

const HomeServiceSection = ({ buttonRoute }: HomeServiceSectionProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(buttonRoute);
  };

  return (
    <section className="w-full bg-white text-gray-800 flex flex-row items-center justify-center h-[500px] lg:h-lvh md:h-lvh">
      <div className="w-3/4 flex flex-col justify-between pr-2 px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold text-[#08268F] mb-4 font-lato">
            SERVICES WE OFFER
          </h2>
          <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-15">
            Discover our full range of secure, efficient services tailored to
            support your operations—every step of the way.
          </p>
          <CTAButton label="Call To Action" onClick={handleButtonClick} />
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
          preload="none"
          poster="/images/lazy_loader.png"
        />
      </div>
    </section>
  );
};

export default HomeServiceSection;
