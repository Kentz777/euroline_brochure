import { useState } from "react";

import { motion } from "framer-motion";
import CTAButton from "./MainCTAButton";

const cards = [
  {
    id: 1,
    title: "Cash Solutions",
    description:
      "Euro Line Cash Solutions delivers secure, reliable cash handling for branches, ATMs, and businesses.",
    image: "/images/cash_solutions.jpg",
  },
  {
    id: 2,
    title: "Logistics Solutions",
    description:
      "Euro Line Logistics provides scalable logistics for transport, warehousing, and supply chains.",
    image: "/images/logistics_solutions.jpg",
  },
];

const LogisticsHeroCard = () => {
  const [frontIndex, setFrontIndex] = useState(0);

  const swapCard = () => {
    setFrontIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] mx-auto flex justify-center">
      {[...cards]
        .map((card, index) => ({
          ...card,
          isFront: index === frontIndex,
        }))
        .sort((a, b) => (a.isFront ? 1 : -1))
        .map((card) => (
          <motion.div
            key={card.id}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center rounded-xl border border-white/20 shadow-2xl transition-all duration-700 ease-in-out ${
              card.isFront
                ? "z-10 scale-90 translate-y-10 translate-x-10 lg:translate-y-20 lg:translate-x-20 brightness-75"
                : "z-20 scale-100 translate-y-0"
            }`}
            style={{ backgroundImage: `url(${card.image})` }}
            onClick={card.isFront ? swapCard : undefined}
            whileTap={card.isFront ? { scale: 0.97 } : {}}
          >
            <div
              className="flex flex-col justify-center items-center w-full h-full p-6 text-center text-white"
              style={{
                backgroundColor: card.isFront
                  ? "rgba(0, 0, 0, 0.4)"
                  : "rgba(0, 0, 0, 0.2)",
              }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 font-lato">
                {card.title}
              </h2>
              <p className="text-sm md:text-md lg:text-lg mb-6 max-w-[80%]">
                {card.description}
              </p>
              <CTAButton
                label="Visit"
                onClick={() => console.log("Clicked!")}
              />
            </div>
          </motion.div>
        ))}
    </div>
  );
};

export default LogisticsHeroCard;
