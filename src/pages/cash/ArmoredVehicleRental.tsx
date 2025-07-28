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
          <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <ArmoredTruck />
            <OrbitControls target={[0, 0.5, 0]} />
          </Canvas>
        </div>
        <p className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold text-white text-center m-8 font-lato">
          Armored van model
        </p>
        <p className="text-xs text-white text-center">
          This work is based on "Low Poly 2013 Toyota HiAce"
          (https://sketchfab.com/3d-models/low-poly-2013-toyota-hiace-f83b4ed4d8534efb81def77b6c1b642d)
          by Alvin.Woodly (https://sketchfab.com/Alvin.Woodly) licensed under
          CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
        </p>
      </div>
      <ReusableGallery
        sections={[
          {
            video: "/video/arm1.mp4",
            image: "/images/avr1.png",
            title: "Direct & Professional",
            description:
              "Transport your high-value assets with confidence. Our fleet of armored vehicles is available for short or long-term rental, complete with trained security personnel, GPS tracking, and 24/7 monitoring—ensuring maximum protection for your people and property.",
          },
          {
            video: "/video/arm2.mp4",
            image: "/images/avr2.png",
            title: "Financial Industry Focus",
            description:
              "Designed for secure cash handling and high-risk transfers, our armored vehicle rental service provides safe and compliant solutions for banks, retailers, and logistics providers. Every unit is equipped with advanced security features and operated by vetted professionals.",
          },
          {
            video: "/video/arm3.mp4",
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
