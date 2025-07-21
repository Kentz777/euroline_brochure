import React from "react";

type JobPoster = {
  title: string;
  image: string;
};

type AvailableJobsSectionProps = {
  jobs: JobPoster[];
};

const AvailableJobsSection = ({ jobs }: AvailableJobsSectionProps) => {
  return (
    <section className="flex flex-col items-center px-4 py-12">
      <h2 className=" text-[#08268F] text-4xl sm:text-5xl font-bold mb-16 blur-[0.8px]">
        Available Jobs:
      </h2>

      <div className="flex flex-col gap-12 w-full max-w-md">
        {jobs.map((job, index) => (
          <div key={index} className="flex flex-col items-center">
            <h3 className="text-xl md:text-2xl font-regular text-[#08268F] mb-12 font-lato">
              {job.title}
            </h3>
            <img
              src={job.image}
              alt={job.title}
              className="w-full object-cover rounded-lg shadow-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AvailableJobsSection;
