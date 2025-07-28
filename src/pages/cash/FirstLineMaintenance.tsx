import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const FirstLineMaintenance = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="First-Line Response Support"
        description="From cash machines to branch terminals, our FLM service provides reliable first-response support. With secure protocols and real-time reporting, we act fast—resolving issues before they escalate and keeping your network running 24/7."
        tagline="Secure First Line Maintenance, Anytime You Need It!"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/flm.mp4",
            image: "/images/flm1.png",
            title: "Clear & Technical",
            description:
              "Our First Line Maintenance service ensures quick response to minor ATM and self-service device issues such as paper jams, screen errors, and cash dispensing faults. With trained technicians on-call, we minimize downtime and keep your machines operating smoothly.",
          },
          {
            video: "/video/flm1.mp4",
            image: "/images/flm2.png",
            title: "Uptime-Focused",
            description:
              "Every second of downtime matters. Our FLM teams respond promptly to first-level issues—clearing errors, refilling consumables, and restoring normal operations without delay. We help you maintain high service availability and customer satisfaction.",
          },
          {
            video: "/video/flm2.mp4",
            image: "/images/flm3.png",
            title: "Secure & Proactive",
            description:
              "From cash machines to branch terminalss, our FLM service provides reliable first-response support. With secure protocols and real-time reporting, we act fast—resolving issues before they escalate and keeping your network running 24/7.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default FirstLineMaintenance;
