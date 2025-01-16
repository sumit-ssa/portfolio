import ProjectCard from "@/components/ui/Cards";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectsData } from "@/constant";
import { ProjectCardProps } from "@/types";

const Projects = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center my-20">
      <SectionHeading title="Projects" />
      <span className="text-sm text-gray-400 mt-1">
        A curated selection of my web projects.
      </span>

      <div className="w-full mt-16 text-gray-400 capitalize text-start ">
        <div className="w-full flex flex-col gap-10">
          {ProjectsData?.map((data: ProjectCardProps) => (
            <ProjectCard data={data} key={data?.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
