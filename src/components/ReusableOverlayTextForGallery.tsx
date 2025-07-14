// components/ReusableOverlay.tsx
import React from "react";

type ReusableOverlayProps = {
  title: string;
  description: string;
};

const ReusableOverlayTextForGallery = ({
  title,
  description,
}: ReusableOverlayProps) => {
  return (
    <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 py-10">
      <h2 className="text-2xl sm:text-3xl lg:text-6xl font-bold text-white mb-4 lg:mb-8">
        {title}
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-white max-w-md leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ReusableOverlayTextForGallery;
