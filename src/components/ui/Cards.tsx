import { ProjectCardProps } from "@/types";
import Image from "next/image";

export default function ProjectCard({ data }: { data: ProjectCardProps }) {
  console.log(data);
  return (
    <div className="w-full flex group overflow-hidden rounded-lg bg-zinc-900 text-white">
      <div className="relative h-[300px] w-full ">
        <Image
          src={data?.imageUrl}
          alt={"imageAlt"}
          fill
          className="object-cover opacity-50"
        />
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{data?.title}</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {data?.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-700"
            >
              {tech.name}
            </span>
          ))}
        </div>

        <p className="text-zinc-400 leading-relaxed">{data?.description}</p>
      </div>
    </div>
  );
}
