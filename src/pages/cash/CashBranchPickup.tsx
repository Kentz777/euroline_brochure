import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const CashBranchPickup = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Secure Branch Cash Service"
        description="Ensure safe, timely transport of your branch cash deposits with our reliable pickup solutions. Our team handles end-to-end cash logistics, reducing your risk exposure while maintaining full transparency, accountability, and compliance at every step."
        tagline="Secure Cash & Branch Pickup Services!"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/cash-branch.mp4",
            image: "/images/cash-branch1.png",
            title: "Professional & Secure",
            description:
              "We ensure continuous availability of funds through precise, secure, and scheduled ATM replenishment. Let your customers enjoy uninterrupted access—anytime, anywhere.",
          },
          {
            video: "/video/cash-branch.mp4",
            image: "/images/cash-branch2.png",
            title: "Operations Focused",
            description:
              "Simplify your branch operations with scheduled cash pickups tailored to your needs. We ensure fast, traceable, and secure movement of funds from your branches to central vaults or banks, helping you streamline reconciliation and safeguard your assets.",
          },
          {
            video: "/video/cash-branch.mp4",
            image: "/images/cash-branch3.png",
            title: "Trust & Coverage",
            description:
              "From single-location pickups to multi-branch networks, our cash/branch pickup service is designed to keep your business running smoothly. Backed by trained personnel and armored transport, we offer scalable and secure solutions you can depend on.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default CashBranchPickup;
