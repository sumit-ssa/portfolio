"use client";

import ProjectCard from "@/components/ui/Cards";
import Container from "@/components/ui/Container";
import { ProjectsData } from "@/constant";
import { ProjectCardProps } from "@/types";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {

  const router = useRouter();

  return (
    <section className="w-full flex flex-col">
      <Container>
        <div className="w-full flex items-center h-28 gap-2 ">
          <ArrowLeft className="cursor-pointer hover:scale-95 transition-all duration-300" onClick={() => router.back()} />{" "}
          <p className="w-full text-3xl font-medium">Projects</p>
        </div>
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
