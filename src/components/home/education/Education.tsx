import SectionHeading from "@/components/ui/SectionHeading";
import { CareerPathDesktop, CareerPathPhone } from "./CareerPath";

const Education = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 mt-4">
      <SectionHeading title="Career Journey" />

      <div className="my-20">
        <span className="hidden xl:block">
          <CareerPathDesktop />
        </span>

        <span className="xl:hidden block pr-20">
          <CareerPathPhone />
        </span>
      </div>
    </section>
  );
};

export default Education;
