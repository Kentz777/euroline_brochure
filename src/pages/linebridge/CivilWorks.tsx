import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const CivilWorks = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Site Development"
        description="From site development to structural support, our civil works team delivers durable, compliant, and cost-effective solutions. Backed by our logistics expertise, we help bring infrastructure projects to life with seamless execution and coordination."
        tagline="Civil Works that Build the Foundation for Progress"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/civilworks_vid.mp4",
            image: "/images/civil_works_img.png",
            title: "Infrastructure-Ready",
            description:
              "From groundwork to structural support, Euro Linebridge Logistics delivers dependable civil works solutions that meet both technical standards and project timelines. Our skilled teams ensure every site is prepped, built, and maintained with precision.",
          },
          {
            video: "/video/civilworks_vid.mp4",
            image: "/images/civil_works_img.png",
            title: "End-to-End Project Support",
            description:
              "We combine construction expertise with logistical efficiency. Whether it’s site preparation, trenching, concrete works, or finishing, our integrated approach streamlines both movement and execution across your project lifecycle.",
          },
          {
            video: "/video/civilworks_vid.mp4",
            image: "/images/civil_works_img.png",
            title: "Built to Last",
            description:
              "Our civil works services lay the groundwork for lasting infrastructure—from utility installation to facility expansion. With safety, durability, and coordination at the core, we help bring complex visions to life—on time and on budget.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default CivilWorks;
