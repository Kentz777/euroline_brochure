import React from "react";
import OutlineCTAButton from "./OutlineCTAButton";

const services = [
  {
    title: "LOGISTICS",
    description: "Smart, Secure Logistics for a Moving World",
    img: "/images/service_5.png",
  },
  {
    title: "WAREHOUSING",
    description: "Flexible Warehousing Built Around Your Needs",
    img: "/images/service_4.png",
  },
  {
    title: "SUPPLY CHAIN",
    description: "Connected Supply Chains. Seamless Execution.",
    img: "/images/service_3.png",
  },
  {
    title: "FABRICATION",
    description: "Precision Fabrication with Logistics Integration",
    img: "/images/service_2.png",
  },
  {
    title: "CIVIL WORKS",
    description: "Civil Works that Build the Foundation for Progress",
    img: "/images/service_1.png",
  },
];

const HomeServicesListSection = () => {
  return (
    <section className="w-full bg-white px-4 md:px-8 lg:px-64 py-12">
      <div className="flex flex-col gap-12 md:gap-12 lg:gap-32 md:grid md:grid-cols-1 sm:grid sm:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-row items-center justify-start md:gap-12 gap-6 lg:gap-4 ${
              index % 2 !== 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col items-start text-left max-w-xs flex-1">
              <h3 className="text-lg font-bold md:text-lg lg:text-4xl text-blue-900">
                {service.title}
              </h3>
              <p className="text-sm md:text-lg lg:text-2xl text-gray-700 mt-1 mb-3">
                {service.description}
              </p>
              <OutlineCTAButton
                label="Call To Action"
                className="!px-4 !py-2 !text-sm !rounded-full"
              />
            </div>
            <img
              src={service.img}
              alt={service.title}
              className="w-24 h-24 md:w-58 md:h-58 object-cover rounded-lg flex-shrink-0 "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServicesListSection;
