import ReusableHeroSection from "../../components/ReusableHeroSection";
import StickyChatButton from "../../components/StickyChatButton";

const CashManagement = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Cash Management Service (Coming Soon)"
        description="Move your cash across islands safely and efficiently with our specialized AirCash services. Designed for time-critical and high-value transport, we provide end-to-end security from pickup to air transfer and delivery—ensuring full traceability and peace of mind."
        tagline="Secure AirCash & Interisland Cash Transport!"
      />
      <StickyChatButton />
    </div>
  );
};

export default CashManagement;
