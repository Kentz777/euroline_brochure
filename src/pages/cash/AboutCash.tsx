import AboutGallerySection from "../../components/AboutGallerySection";
import AboutHeroSection from "../../components/AboutHeroSection";
import AboutReviews from "../../components/AboutReviews";
import MapsSection from "../../components/MapsSection";
import ReusableCoreValues from "../../components/ReusableCoreValues";
import ReusableJobOpeningsSection from "../../components/ReusableJobOpeningsSection";
import { eurolineCashMapURL } from "../../data/cash/locations";

const AboutCash = () => {
  return (
    <div className="bg-white">
      <AboutHeroSection />
      <AboutReviews />
      <ReusableCoreValues
        sections={[
          {
            image: "/images/core_values.png",
            title: "Security First",
            description:
              "We prioritize the safety of every cash movement, with trusted protocols and secured logistics tailored for high-value transport.",
          },
          {
            image: "/images/core_values.png",
            title: "Client-Centered",
            description:
              "Our services are built around our clients’ needs — from reliability to responsiveness, we deliver with purpose and precision.",
          },
          {
            image: "/images/core_values.png",
            title: "Operational Excellence",
            description:
              "From route planning to delivery execution, we uphold a standard of professionalism that ensures consistent and efficient CIT operations.",
          },
        ]}
      />
      <MapsSection
        mapUrl={eurolineCashMapURL}
        companyName="Euroline Cash Solutions"
        address="Blk 9 Lot 22 Joshua St, Las Piñas, 1744 Metro Manila"
      />
      <AboutGallerySection />
      <ReusableJobOpeningsSection
        title="Join Our Team"
        description="Be part of a team that protects, delivers, and secures. At Euro Line Cash Solutions, your work keeps businesses and communities moving safely."
        buttonLabel="Apply Now"
        buttonRoute="/cash-solutions/careers"
      />
    </div>
  );
};

export default AboutCash;
