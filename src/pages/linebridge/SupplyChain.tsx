import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const SupplyChain = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Connected Flow"
        description="We simplify complex supply chain operations by bringing together logistics, warehousing, and real-time tracking. From sourcing to delivery, our systems are built to adapt, scale, and deliver results—fast."
        tagline="Connected Supply Chains. Seamless Execution."
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/supplychain_vid.mp4",
            image: "/images/supply_chain.png",
            title: "Optimized Operations",
            description:
              "Euro Linebridge Logistics helps you streamline every link in your supply chain—from sourcing and warehousing to distribution and final delivery. Our integrated systems ensure speed, visibility, and reduced costs across the entire process.",
          },
          {
            video: "/video/supplychain_vid.mp4",
            image: "/images/supply_chain.png",
            title: "End-to-End Control",
            description:
              "Gain full control over your supply chain with our end-to-end service approach. We provide real-time tracking, inventory management, and coordinated transport to ensure seamless movement from supplier to shelf.",
          },
          {
            video: "/video/supplychain_vid.mp4",
            image: "/images/supply_chain.png",
            title: "Resilient and Scalable",
            description:
              "Build a supply chain that adapts to demand, disruption, and growth. With Euro Linebridge Logistics, you gain a reliable partner equipped to scale with your business and respond quickly to changing market conditions.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default SupplyChain;
