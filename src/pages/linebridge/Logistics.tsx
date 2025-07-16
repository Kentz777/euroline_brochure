import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const Logistics = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Transport Solutions"
        description="We provide end-to-end logistics services designed to move your business forward with speed and precision. From ground transport to interisland delivery, our logistics network ensures your cargo is handled professionally—on time, every time."
        tagline="Smart, Secure Logistics for a Moving World"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/Logistics.mp4",
            image: "/images/logistics_img.png",
            title: "Efficiency & Reliability",
            description:
              "Our logistics network combines real-time coordination with dependable execution. Whether you’re transporting goods locally or across islands, we ensure consistency, visibility, and results—every step of the way.",
          },
          {
            video: "/video/Logistics.mp4",
            image: "/images/logistics_img.png",
            title: "Client-Centric & Trusted",
            description:
              "Euro Linebridge Logistics is built on reliability. We provide flexible transport, warehousing, and delivery services tailored to your business goals—backed by security, speed, and expert handling.",
          },
          {
            video: "/video/Logistics.mp4",
            image: "/images/logistics_img.png",
            title: "Global Reach & Local Expertise",
            description:
              "We combine global scale with local expertise to deliver tailored solutions across markets, ensuring the best outcomes for your supply chain.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default Logistics;
