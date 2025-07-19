import ReusableGallery from "../../components/ReusableGallery";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import ReviewsSection from "../../components/ReviewsSection";
import StickyChatButton from "../../components/StickyChatButton";

const Fabrication = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Industrial Production"
        description="Our fabrication services support your operations with expertly crafted components and assemblies, ready for immediate deployment. Coupled with our transport and warehousing network, we bring production and delivery under one streamlined system"
        tagline="Precision Fabrication with Logistics Integration"
      />
      <ReusableGallery
        sections={[
          {
            video: "/video/fabrication_vid.mp4",
            image: "/images/fabrication_img.png",
            title: "Industrial Support",
            description:
              "Euro Linebridge Logistics supports industrial and commercial operations with precision fabrication services. From pre-assembly to component processing, we ensure every item is made to spec and delivered on schedule—fully integrated with our transport and storage systems.",
          },
          {
            video: "/video/fabrication_vid.mp4",
            image: "/images/fabrication_img.png",
            title: "Built for Logistics Efficiency",
            description:
              "Our fabrication service is designed to complement your logistics workflow. We cut lead times by preparing components near distribution hubs—allowing for faster packing, staging, and deployment wherever your business operates.",
          },
          {
            video: "/video/fabrication_vid.mp4",
            image: "/images/fabrication_img.png",
            title: "Quality Meets Speed",
            description:
              "Whether you need welded structures, pre-fitted parts, or production-ready kits, our fabrication team delivers with accuracy and speed. Backed by Euro Linebridge’s logistics network, your materials move from workshop to worksite without delay.",
          },
        ]}
      />
      <ReviewsSection />
      <StickyChatButton />
    </div>
  );
};

export default Fabrication;
