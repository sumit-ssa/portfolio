"use client";

import Details from "./Details";
import Name from "./Name";
import TypingAnimation from "./TypeAnimation";
import Social from "./Social";
import { useRouter } from "next/navigation";
// import Threads from "@/components/ui/Threads";

const Hero = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/cv");
  };

  return (
    <section className="relative mt-16 xl:mt-20 flex flex-col gap-10">
      {/* <div className="absolute mb-24  inset-0 ">
        <Threads amplitude={1.5} distance={0} enableMouseInteraction={false} />
      </div> */}

      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center gap-2 xl:gap-6">
        <Name />
        <TypingAnimation />
        <div className="mt-20 xl:mt-0">
          <Details />
        </div>
        <div className="flex items-center gap-4 text-gray-500">
          <div
            className="buttons"
            data-aos="fade-up"
            data-aos-delay="400"
            onClick={navigateHandler}
          >
            <button className="btn">
              <span></span>
              <p data-text="Click Here" data-title="Read CV!"></p>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-6">
        <Social />
      </div>
    </section>
  );
};

export default Hero;
