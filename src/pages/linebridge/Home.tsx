import HomeHeroSection from "../../components/HomeHeroSection";
import HomeServiceSection from "../../components/HomeServiceSection";
import HomeServicesListSection from "../../components/HomeServicesListSection";
import ReusableJobOpeningsSection from "../../components/ReusableJobOpeningsSection";
import StickyChatButton from "../../components/StickyChatButton";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeServiceSection />
      <HomeServicesListSection />
      <ReusableJobOpeningsSection
        title="JOB OPENINGS"
        description="Join a growing team committed to excellence, innovation, and delivering real impact across industries."
        buttonLabel="Apply Now"
      />
      <StickyChatButton />
    </>
  );
};

export default Home;
