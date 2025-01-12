import Intro from "./Intro";
import Technologies from "./Technologies";

const About = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 mt-4">
      <div className="w-full flex items-center justify-center gap-4">
        <span className="w-24 text-white bg-white h-0.5" />
        <span className="text-2xl xl:text-3xl font-semibold"> About Me</span>
        <span className="w-24 text-white bg-white h-0.5" />
      </div>
      <div className="w-full mt-8 text-gray-400 capitalize text-start xl:text-start text-base xl:text-lg">
        <Intro />

        <Technologies />
      </div>
    </section>
  );
};

export default About;
