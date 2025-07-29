import { motion } from "framer-motion";

interface ReusableImageGalleryProps {
  topRow: string[];
  centerImage: string;
  bottomRow: string[];
  imageClassName?: string;
}

const getDefaultAlt = (src: string) =>
  src
    .split("/")
    .pop()
    ?.replace(/\.[^/.]+$/, "")
    ?.replace(/[-_]/g, " ") ?? "Gallery image";

const ReusableImageGallery: React.FC<ReusableImageGalleryProps> = ({
  topRow,
  centerImage,
  bottomRow,
  imageClassName = "lg:h-75 h-45 w-full object-cover rounded-lg",
}) => {
  const renderImage = (src: string, index: number) => (
    <motion.img
      key={index}
      src={src}
      alt={getDefaultAlt(src)}
      className={imageClassName}
      initial={{ rotate: 0 }}
      whileInView={{ rotate: 360 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
    />
  );

  return (
    <section className="flex flex-col items-center px-4 py-12">
      <div className="flex flex-col gap-4 max-w-5xl w-full">
        <div className="flex flex-row gap-4 px-15 items-center justify-center">
          {topRow.map(renderImage)}
        </div>

        {renderImage(centerImage, -1)}

        <div className="flex flex-row gap-4 px-15 items-center justify-center">
          {bottomRow.map(renderImage)}
        </div>
      </div>
    </section>
  );
};

export default ReusableImageGallery;
