import HomeHeroSection from "../../components/cash/HomeHeroSection";
import HomeServicesListSectionCash from "../../components/cash/HomeServicesListSectionCash";
import HomeServiceSection from "../../components/HomeServiceSection";
import StickyChatButton from "../../components/StickyChatButton";

const HomeCash = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeServiceSection buttonRoute="/cash-solutions/careers" />
      <HomeServicesListSectionCash />
      <StickyChatButton />
    </>
  );
};

export default HomeCash;
