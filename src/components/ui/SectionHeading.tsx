import { SectionTitleProps } from "@/types";

const SectionHeading = ({ title }: SectionTitleProps) => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <span
        className="w-24 text-white bg-white h-0.5"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <span
        className="text-2xl xl:text-3xl font-semibold"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {title}
      </span>
      <span
        className="w-24 text-white bg-white h-0.5"
        data-aos="fade-up"
        data-aos-delay="100"
      />
    </div>
  );
};

export default SectionHeading;
