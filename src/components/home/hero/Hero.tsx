"use client";

import Details from "./Details";
import Name from "./Name";
import TypingAnimation from "./TypeAnimation";
import Social from "./Social";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  const navigateHandler = () => {
    router.push("/cv");
  };

  return (
    <section className="max-w-5xl mx-auto mt-16 xl:mt-20 flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-2 xl:gap-6">
        <Name />
        <TypingAnimation />
        <Details />
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
