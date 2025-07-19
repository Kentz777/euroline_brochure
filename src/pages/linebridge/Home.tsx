import HomeHeroSection from "../../components/HomeHeroSection";
import HomeServiceSection from "../../components/HomeServiceSection";
import HomeServicesListSection from "../../components/HomeServicesListSection";
import HomeJobOpeningsSection from "../../components/HomeJobOpeningsSection";
import StickyChatButton from "../../components/StickyChatButton";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeServiceSection />
      <HomeServicesListSection />
      <HomeJobOpeningsSection />
      <StickyChatButton />
    </>
  );
};

export default Home;
