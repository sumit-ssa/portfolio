"use client";

// import { HireButtons } from "@/components/ui/Buttons";
import Details from "./Details";
import Name from "./Name";
import TypingAnimation from "./TypeAnimation";
import Social from "./Social";
import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="max-w-5xl mx-auto mt-16 xl:mt-20 flex flex-col gap-10">
      <div className="flex flex-col justify-center items-center gap-2 xl:gap-6">
        <Name />
        <TypingAnimation />
        <Details />
        <div className="flex  items-center gap-4 text-gray-500">
          {/* <span data-aos="fade-up" data-aos-delay="300">
            <HireButtons title={"Hire Me"} link={"#contact"} />
          </span> */}
          {/* <span data-aos="fade-up" data-aos-delay="400"> */}
          {/* <HireButtons
              title={"View Resume"}
              link={
                "https://drive.google.com/file/d/1eKJA3oZC1tHNvVvT3WhlB11t006ahHSv/view?usp=drive_link"
              }
            /> */}
          <div className="button-icon" data-aos="fade-up" data-aos-delay="400">
            <div className="icon">
              <FileText className="text-blue-400" />
            </div>
            <div className="cube">
              <span className="side front">Read CV!</span>
              <span className="side top">Click Here</span>
            </div>
          </div>
          {/* </span> */}
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-6">
        <Social />
      </div>
    </section>
  );
};

export default Hero;
