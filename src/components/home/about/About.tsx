import SectionHeading from "@/components/ui/SectionHeading";
import Intro from "./Intro";
import Technologies from "./Technologies";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 mt-4">
      <SectionHeading title="About Me" />
      <div className="w-full mt-8 text-gray-400 capitalize text-start xl:text-start text-base xl:text-lg">
        <Intro />

        <Technologies />
      </div>
    </section>
  );
};

export default About;
