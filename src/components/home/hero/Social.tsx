import { SocialLinksData } from "@/constant";

const Social = () => {
  return (
    <div className="flex items-center gap-16 justify-around">
      {SocialLinksData?.map((data, i) => {
        const Icon = data?.Icon;
        const duration = 300 * (i + 1);
        return (
          <a
            key={i}
            href={data?.link}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer"
            data-aos="fade-up"
            data-aos-duration={duration}
          >
            <Icon size={20} className="text-white" />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
