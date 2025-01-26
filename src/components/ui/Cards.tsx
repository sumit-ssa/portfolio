import { ProjectCardProps } from "@/types";
import Image from "next/image";
import { TechBadge } from "./Badges";
import { usePathname } from "next/navigation";

export default function ProjectCard({ data }: { data: ProjectCardProps }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <a
      className={`w-full min-h-[200px] flex flex-col xl:flex-row group rounded-lg border border-gray-600 hover:bg-zinc-900 transition-all duration-300 text-white ${
        data?.style && "xl:flex-col"
      } `}
      href={data?.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`relative ${
          !pathname?.includes("projects") && "basis-2/3"
        }  `}
      >
        <Image
          src={data?.imageUrl}
          alt={"imageAlt"}
          className="object-cover h-full w-full opacity-70 group-hover:opacity-100 transition-all duration-500"
        />
      </div>

      <div className="w-full py-2 px-2 xl:px-4 xl:py-3 space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{data?.title}</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {data?.technologies.map((tech, i) => (
            <TechBadge key={i} data={tech?.name} />
          ))}
        </div>

        <p className="text-zinc-400 leading-relaxed">{data?.description}</p>
      </div>
    </a>
  );
}
