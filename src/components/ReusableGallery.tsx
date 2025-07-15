// components/ReusableGallery.tsx
import React from "react";
import ReusableOverlayTextForGallery from "./ReusableOverlayTextForGallery";

type GallerySection = {
  video: string;
  image: string;
  title: string;
  description: string;
};

type ReusableGalleryProps = {
  sections: GallerySection[];
};

const ReusableGallery = ({ sections }: ReusableGalleryProps) => {
  return (
    <div className="flex flex-col gap-8 bg-white">
      {sections.map((section, idx) => (
        <div
          key={idx}
          className="flex flex-col lg:flex-row gap-6 w-full bg-white px-6 lg:px-68 md:px-32"
        >
          {/* Video Section */}
          <div className="relative w-full lg:w-1/4 rounded-xl overflow-hidden h-[200px] lg:h-[700px]">
            <video
              src={section.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            ></video>
          </div>

          {/* Image Section with Overlay */}
          <div className="relative w-full rounded-xl overflow-hidden h-[700px]">
            <img
              src={section.image}
              alt={`Gallery ${idx + 1}`}
              className="w-full h-full object-cover"
            />
            <ReusableOverlayTextForGallery
              title={section.title}
              description={section.description}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReusableGallery;
