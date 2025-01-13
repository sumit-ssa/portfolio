import SectionHeading from "@/components/ui/SectionHeading";
import Scholling from "./Scholling";
import Experience from "./Experience";
// import { CareerPathDesktop, CareerPathPhone } from "./CareerPath";

const Education = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 mt-4">
      <SectionHeading title="My Journey" />

      {/* <div className="my-20">
        <span className="hidden xl:block">
          <CareerPathDesktop />
        </span>

        <span className="xl:hidden block pr-20">
          <CareerPathPhone />
        </span>
      </div> */}

      <div className="w-full mt-8">
        <Experience />
        <Scholling />
      </div>
    </section>
  );
};

export default Education;
