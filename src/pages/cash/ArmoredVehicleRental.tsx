import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import ArmoredTruck from "../../components/ArmoredTruck";
import ReusableGallery from "../../components/ReusableGallery";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";
const ArmoredVehicleRental = () => {
  return (
    <div className="flex flex-col gap-10 bg-white">
      <div className="flex flex-col p-5 bg-gradient-to-b from-[#08268F] to-[#00BFFF] md:pt-[250px] pt-[120px] lg:pt-[180px]">
        <div style={{ width: "100%", height: "50vh" }}>
          <Canvas camera={{ position: [0, 1, 5] }}>
            <ambientLight intensity={4} />
            <ArmoredTruck />
            <OrbitControls />
          </Canvas>
        </div>
        <p className="ttext-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-white text-center mb-8 font-lato">
          Armored van model
        </p>
        <p className="text-lg text-white text-center">model description</p>
      </div>
      <ReusableGallery
        sections={[
          {
            video: "/video/Logistics.mp4",
            image: "/images/avr1.png",
            title: "Direct & Professional",
            description:
              "Transport your high-value assets with confidence. Our fleet of armored vehicles is available for short- or long-term rental, complete with trained security personnel, GPS tracking, and 24/7 monitoring—ensuring maximum protection for your people and property.",
          },
          {
            video: "/video/Logistics.mp4",
            image: "/images/avr2.png",
            title: "Financial Industry Focus",
            description:
              "Designed for secure cash handling and high-risk transfers, our armored vehicle rental service provides safe and compliant solutions for banks, retailers, and logistics providers. Every unit is equipped with advanced security features and operated by vetted professionals.",
          },
          {
            video: "/video/Logistics.mp4",
            image: "/images/avr3.png",
            title: "Flexible & Scalable",
            description:
              "Whether for a one-time high-security escort or ongoing armored logistics, our rental service adapts to your operational needs. Choose from a range of vehicle types, backed by fully insured drivers and real-time asset protection.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default ArmoredVehicleRental;
