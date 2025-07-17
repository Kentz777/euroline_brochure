import React from "react";

const AboutGallerySection = () => {
  return (
    <section className="flex flex-col items-center px-4 py-12">
      <div className="grid grid-cols-2 gap-4 max-w-5xl w-full">
        {/* Top two images */}
        <img
          src="/images/lazy_loader.png"
          alt="Top Left"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="/images/lazy_loader.png"
          alt="Top Right"
          className="w-full h-48 object-cover rounded-lg"
        />

        {/* Center full-width image (span 2 columns) */}
        <img
          src="/images/lazy_loader.png"
          alt="Center Wide"
          className="w-full h-80 object-cover rounded-lg col-span-2"
        />

        {/* Bottom two images */}
        <img
          src="/images/lazy_loader.png"
          alt="Bottom Left"
          className="w-full h-48 object-cover rounded-lg"
        />
        <img
          src="/images/lazy_loader.png"
          alt="Bottom Right"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
    </section>
  );
};

export default AboutGallerySection;
