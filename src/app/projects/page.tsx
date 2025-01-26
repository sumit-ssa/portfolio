"use client";

import ProjectCard from "@/components/ui/Cards";
import Container from "@/components/ui/Container";
import { ProjectsData } from "@/constant";
import { ProjectCardProps } from "@/types";

const Page = () => {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex items-center h-32 bg-gray-950">
        <Container>
          <p className="w-full text-3xl font-medium">Projects</p>
        </Container>
      </div>
      <Container>
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6 mt-10 mb-20">
          {ProjectsData?.map((data: ProjectCardProps) => (
            <ProjectCard data={{ ...data, style: true }} key={data?.id} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Page;
