import { ProjectCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ data }: { data: ProjectCardProps }) {
  return (
    <Link
      href={data?.url}
      target="_blank"
      className="w-full min-h-[200px] flex flex-col xl:flex-row group rounded-lg border border-gray-600 hover:bg-zinc-900  transition-all duration-300 text-white "
    >
      <div className="relative basis-2/3 ">
        <Image
          src={data?.imageUrl}
          alt={"imageAlt"}
          className="object-cover h-full w-full opacity-70 group-hover:opacity-100 transition-all duration-500 "
        />
      </div>

      <div className="w-full py-2 px-2 xl:px-4  space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{data?.title}</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {data?.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-500"
            >
              {tech.name}
            </span>
          ))}
        </div>

        <p className="text-zinc-400 leading-relaxed">{data?.description}</p>
      </div>
    </Link>
  );
}
