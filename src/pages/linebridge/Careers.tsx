import AvailableJobsSection from "../../components/AvailableJobsSection";
import ReusableHeroSection from "../../components/ReusableHeroSection";

const Careers = () => {
  return (
    <div className="bg-white py-6">
      <ReusableHeroSection
        title="Join Us Today!"
        description="Be part of a growing team that drives efficiency, delivers solutions, and moves industries forward. At Euro Linebridge Logistics, we’re building the future of smart logistics—"
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

export default Careers;
