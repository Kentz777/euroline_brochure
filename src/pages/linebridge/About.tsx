import AboutHeroSection from "../../components/AboutHeroSection";
import AboutReviews from "../../components/AboutReviews";
import ReusableCoreValues from "../../components/ReusableCoreValues";
import MapsSection from "../../components/MapsSection";
import ReusableJobOpeningsSection from "../../components/ReusableJobOpeningsSection";
import { euroLinebridgeMapURL } from "../../data/linebridge/locations";
import ReusableImageGallery from "../../components/ReusableImageGallery";

const About = () => {
  return (
    <div className="bg-white">
      <AboutHeroSection />
      <AboutReviews />
      <ReusableCoreValues
        sections={[
          {
            image: "/images/core_values.png",
            title: "Innovation",
            description:
              "We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing you to save both time and money. This way, you can dedicate more precious moments to your loved ones.",
          },
          {
            image: "/images/core_values.png",
            title: "Client Success First",
            description:
              "We ensure your success with tailored solutions, expert logistics handling, and dedicated client service, every step of the way.",
          },
          {
            image: "/images/core_values.png",
            title: "Collaboration",
            description:
              "We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing you to save both time and money. This way, you can dedicate more precious moments to your loved ones.",
          },
        ]}
      />
      <MapsSection
        companyName="Eurolinebridge Logistics"
        address="Blk 9 Lot 22 Joshua St, Las Piñas, 1744 Metro Manila"
        mapUrl={euroLinebridgeMapURL}
      />
      <ReusableImageGallery
        topRow={["/images/gal5.jpg", "/images/gal4.jpg"]}
        centerImage="/images/gal1.jpg"
        bottomRow={["/images/gal2.jpg", "/images/gal3.jpg"]}
      />
      <ReusableJobOpeningsSection
        title="Join Our Team"
        description="Join a growing team committed to excellence, innovation, and delivering real impact across industries."
        buttonLabel="Apply Now"
        buttonRoute="/linebridge/careers"
      />
    </div>
  );
};

export default About;
