import { ExperienceData } from "@/constant";
import { ProfileProps } from "@/types";
import ProfileCard from "./ProfileCard";

const Experience = () => {
  return (
    <>
      <div
        className="w-full text-start text-xl text-blue-400 font-medium mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Experience
      </div>
      <div className="w-full flex flex-col gap-4">
        {ExperienceData?.map((data: ProfileProps) => {
          return <ProfileCard key={data?.id} data={data} />;
        })}
      </div>
    </>
  );
};

export default Experience;
