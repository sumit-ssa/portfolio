// import Education from "./Education";
import { EducationData } from "@/constant";
import { ProfileProps } from "@/types";
import ProfileCard from "./ProfileCard";

const Scholling = () => {
  return (
    <>
      <div
        className="w-full text-start text-xl text-blue-400 font-medium mt-12 mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Education
      </div>
      <div className="w-full flex flex-col gap-4">
        {EducationData?.map((data: ProfileProps) => {
          return <ProfileCard key={data?.id} data={data} />;
        })}
      </div>
    </>
  );
};

export default Scholling;
