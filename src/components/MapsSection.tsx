import React from "react";

const LocationSection = () => {
  return (
    <section className="flex flex-col items-center  justify-center px-6 lg:px-68 md:px-32 py-12 bg-white">
      <div className="bg-gradient-to-b from-[#08268F] to-[#00BFFF] p-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 font-lato">
          Where we Located?
        </h2>

        <div className="w-full rounded-lg overflow-hidden border-4 border-[#00BFFF] mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5449.684834054871!2d120.99725664982823!3d14.46832589351606!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cf0b0fccd667%3A0x693611b3c247ed49!2sEuro%20Linebridge%20Logistics!5e1!3m2!1sen!2sph!4v1752739222727!5m2!1sen!2sph"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-center text-white p-4 rounded-lg w-full flex flex-col gap-4">
          <h3 className="text-xl  font-semibold mb-2 font-lato">
            Euro Linebridge Logistics
          </h3>
          <p className="text-lg md:text-base">
            Blk 9 Lot 22 Joshua St, Las Piñas, 1744 Metro Manila
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
