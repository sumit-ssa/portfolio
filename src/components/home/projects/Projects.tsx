"use client";

import ProjectCard from "@/components/ui/Cards";
import SectionHeading from "@/components/ui/SectionHeading";
import { ProjectsData } from "@/constant";
import { ProjectCardProps } from "@/types";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Projects = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/projects");
  };

  return (
    <section className="w-full flex flex-col items-center justify-center mt-20 mb-10">
      <SectionHeading title="Projects" />
      <div className="w-full text-start text-sm text-gray-400 mt-1">
        A curated selection of my web projects.
      </div>

      <div className="w-full mt-16 text-gray-400 capitalize text-start">
        <div className="w-full flex flex-col gap-10">
          {ProjectsData?.map((data: ProjectCardProps) => (
            <ProjectCard data={data} key={data?.id} />
          ))}
          <div className="w-full flex items-center justify-center group relative ">
            <div
              className="flex cursor-pointer items-center gap-1"
              onClick={navigateHandler}
            >
              <span>See All</span>
              <MoveRight />
              <span className="absolute bottom-0 h-0.5 w-0 bg-blue-500 transition-all duration-500 group-hover:w-20"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
