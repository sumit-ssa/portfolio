import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
  return (
    <div
      className="py-4 text-2xl xl:text-4xl font-semibold capitalize text-gray-400 "
      data-aos="fade-up"
      data-aos-duration="400"
    >
      <TypeAnimation
        sequence={[
          "I Build Things for Web",
          1000,
          "I Make Websites Attractive",
          1000,
          "I Lead and Build on Web",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        className="font-medium"
      />
    </div>
  );
};

export default TypingAnimation;
