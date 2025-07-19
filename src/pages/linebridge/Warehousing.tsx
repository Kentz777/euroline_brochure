import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const Warehousing = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Secure Storage"
        description="Our secure and scalable warehousing facilities offer a safe home for your goods—whether for short-term storage or integrated fulfillment. With 24/7 monitoring and digital inventory systems, you stay in control from dock to door."
        tagline="Flexible Warehousing Built Around Your Needs"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/warehousing_vid.mp4",
            image: "/images/warehousing_img.png",
            title: "Secure & Scalable",
            description:
              "Euro Linebridge Logistics offers secure, monitored warehouse facilities for short- and long-term storage. Our warehousing service is designed for flexibility, supporting businesses with seasonal, overflow, or distribution-based needs—all under 24/7 surveillance and access control.",
          },
          {
            video: "/video/warehousing_vid.mp4",
            image: "/images/warehousing_img.png",
            title: "Smart Inventory Management",
            description:
              "From pallet to pick-and-pack, we manage your inventory with accuracy and care. Our digital tracking system ensures transparency across the entire storage lifecycle—so you always know where your goods are and when they're moving.",
          },
          {
            video: "/video/warehousing_vid.mp4",
            image: "/images/warehousing_img.png",
            title: "End-to-End Fulfillment Ready",
            description:
              "More than just storage, our warehousing services integrate seamlessly with transport, delivery, and replenishment. Whether you’re preparing stock for retail, distribution, or direct delivery, we keep your goods secure, organized, and ready to go.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default Warehousing;
