import { SocialLinksData } from "@/constant";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950">
      <div className="w-full flex items-center flex-col justify-center gap-6 py-10">
        <div className="w-full flex items-center justify-center gap-10 ">
          {SocialLinksData?.map((data, i) => {
            const Icon = data?.Icon;
            return (
              <a
                key={i}
                href={data?.link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer"
              >
                <Icon size={20} className="text-white" />
              </a>
            );
          })}
        </div>
        <span>©2024 Sumit Verma</span>
      </div>
    </footer>
  );
};

export default Footer;
