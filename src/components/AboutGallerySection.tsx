import { motion } from "framer-motion";

const AboutGallerySection = () => {
  return (
    <section className="flex flex-col items-center px-4 py-12">
      <div className="flex flex-col gap-4 max-w-5xl w-full">
        <div className="flex flex-row gap-4 px-15 items-center justify-center">
          <motion.img
            src="/images/gallerycontent1.png"
            alt="Top Left"
            className="lg:h-75 h-45 w-3/4 object-cover rounded-lg"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
          <motion.img
            src="/images/gallerycontent2.png"
            alt="Top Right"
            className="lg:h-75 h-45 w-4/8 object-cover rounded-lg"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>

        <motion.img
          src="/images/gallerycontent3.png"
          alt="Center Wide"
          className="col-span-4 h-80 w-full object-cover rounded-lg"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />

        <div className="flex flex-row gap-4 px-15 items-center justify-center">
          <motion.img
            src="/images/gallerycontent4.png"
            alt="Bottom Left"
            className="lg:h-75 h-45 w-3/4 object-cover rounded-lg"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
          <motion.img
            src="/images/gallerycontent5.png"
            alt="Bottom Right"
            className="lg:h-75 h-45 w-4/8 object-cover rounded-lg"
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutGallerySection;
