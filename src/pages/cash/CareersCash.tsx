import AvailableJobsSection from "../../components/AvailableJobsSection";
import ReusableHeroSection from "../../components/ReusableHeroSection";

const CareersCash = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Join Us Today!"
        description="Join a dynamic team powering secure cash solutions and intelligent logistics. At Euro Linebridge Logistics, we’re redefining efficiency and building the future of movement—one secure delivery at a time."
        tagline="Together."
      />
      <AvailableJobsSection
        jobs={[
          {
            title: "Field Specialist",
            image: "/images/logistics/job1.jpg",
          },
          {
            title: "Reconciliation",
            image: "/images/logistics/job2.jpg",
          },
        ]}
      />
    </div>
  );
};

export default CareersCash;
