import { motion } from "framer-motion";

type CoreValueSection = {
  image: string;
  title: string;
  description: string;
};

type ReusableCoreValuesProps = {
  sections: CoreValueSection[];
};

const ReusableCoreValues = ({ sections }: ReusableCoreValuesProps) => {
  return (
    <section className="flex flex-col gap-12 py-12 px-6 justify-center items-center md:px-32 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-12">
      {sections.map((section, idx) => (
        <motion.div
          key={idx}
          className={`flex flex-col justify-between max-w-lg w-full bg-white p-4 rounded-lg lg:shadow-md ${
            idx === 1
              ? "lg:col-span-2 lg:justify-self-center"
              : idx === 0
              ? "lg:row-start-2 lg:col-start-1 lg:justify-self-center"
              : "lg:row-start-2 lg:col-start-2 lg:justify-self-center"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: idx * 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div>
            <span className="text-[#08268F] text-2xl">✹</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#08268F] mb-2">
              {section.title}
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-[#08268F] leading-relaxed">
              {section.description}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden mt-4">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-56 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default ReusableCoreValues;
