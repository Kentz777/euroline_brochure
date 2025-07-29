import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const AircashTransport = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Secured Transport"
        description="Move your cash across islands safely and efficiently with our specialized AirCash services. Designed for time-critical and high-value transport, we provide end-to-end security from pickup to air transfer and delivery—ensuring full traceability and peace of mind."
        tagline="Secure AirCash & Interisland Cash Transport!"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/air1.mp4",
            image: "/images/air1.png",
            title: "Island-to-Island Transport",
            description:
              "We provide fast and secure transport of high-value items and cash across islands via air, ensuring minimized transit time and full accountability. Ideal for banks, remittance centers, and high-risk cargo.",
          },
          {
            video: "/video/air2.mp4",
            image: "/images/air2.png",
            title: "End-to-End Chain of Custody",
            description:
              "From point of pickup to aerial transport and final delivery, our protocols ensure every item is tracked, verified, and protected throughout the journey. Our process includes sealed containers, GPS tracking, and digital documentation.",
          },
          {
            video: "/video/air3.mp4",
            image: "/images/air3.png",
            title: "Time-Critical Cash Services",
            description:
              "Whether it's emergency cash delivery or routine inter-branch transport, our team responds with speed and precision. We understand the urgency of your operations and match it with reliable logistics execution.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default AircashTransport;
