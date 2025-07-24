import HomeHeroSection from "../../components/cash/HomeHeroSection";
import HomeServicesListSectionCash from "../../components/cash/HomeServicesListSectionCash";
import HomeServiceSection from "../../components/HomeServiceSection";
import ReusableJobOpeningsSection from "../../components/ReusableJobOpeningsSection";
import StickyChatButton from "../../components/StickyChatButton";

const HomeCash = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeServiceSection buttonRoute="/cash-solutions/careers" />
      <HomeServicesListSectionCash />
      <ReusableJobOpeningsSection
        title="JOB OPENINGS"
        description="Be part of a team that protects, delivers, and secures. At Euro Line Cash Solutions, your work keeps businesses and communities moving safely."
        buttonLabel="Apply Now"
        buttonRoute="/cash-solutions/careers"
      />
      <StickyChatButton />
    </>
  );
};

export default HomeCash;
