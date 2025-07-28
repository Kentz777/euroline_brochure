import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const ATMReplenishment = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="ATM replenishment service"
        description="With strict security protocols and real-time tracking, our ATM replenishment service guarantees safe and accurate cash handling. Our expert team minimizes risk and ensures full compliance, giving your institution complete peace of mind."
        tagline="Secure Cash Replenishment for Every ATM!"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/atm-rep.mp4",
            image: "/images/atm-rep1.png",
            title: "Cash Always Ready",
            description:
              "We ensure continuous availability of funds through precise, secure, and scheduled ATM replenishment. Let your customers enjoy uninterrupted access—anytime, anywhere.",
          },
          {
            video: "/video/atm1.mp4",
            image: "/images/atm-rep2.png",
            title: "Never Empty",
            description:
              "Our armored teams replenish your ATMs with efficiency and security at the core. Stay ahead of demand and reduce downtime with round-the-clock coverage.",
          },
          {
            video: "/video/atm2.mp4",
            image: "/images/atm-rep3.png",
            title: "Stay Loaded",
            description:
              "We monitor, deliver, and restock your ATMs with real-time responsiveness—minimizing disruption and maximizing uptime. Your peace of mind is just one delivery away.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default ATMReplenishment;
