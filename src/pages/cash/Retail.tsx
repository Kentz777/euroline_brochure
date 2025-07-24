import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const Retail = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="In-store Logistics Service"
        description="We support retail branches with fast, secure, and scheduled services including cash pickup, replenishment, and emergency support. Our trusted team helps reduce shrinkage, improve audit trails, and let your staff focus on serving customers."
        tagline="Retail Support That Moves With Your Business!"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/Logistics.mp4",
            image: "/images/retail1.png",
            title: "Retail Cash Handling",
            description:
              "Simplify your day-to-day operations with our end-to-end cash logistics tailored for retail businesses. From register pickups to end-of-day deposit services, we help streamline your cash flow and reduce in-store risk with reliable armored transport and timely reconciliation.",
          },
          {
            video: "/video/Logistics.mp4",
            image: "/images/retail2.png",
            title: "Retail Logistics Support",
            description:
              "From high-volume cash pickups to secured deliveries, our solutions are designed to keep your retail business running smoothly. We offer customizable services that scale with your needs—ensuring efficiency, safety, and accountability from store to vault.",
          },
          {
            video: "/video/Logistics.mp4",
            image: "/images/retail3.png",
            title: "Focus on In-Store Support",
            description:
              "We support retail branches with fast, secure, and scheduled services including cash pickup, replenishment, and emergency support. Our trusted team helps reduce shrinkage, improve audit trails, and let your staff focus on serving customers.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default Retail;
