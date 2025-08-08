import TextPressure from "@/components/ui/TextPreassure";

const Name = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center gap-2 xl:gap-4">
        <div className="text-lg xl:text-xl font-semibold text-gray-300  flex items-center gap-2">
          <span data-aos="fade-up" data-aos-delay="100">
            👋Hi,
          </span>
          <span data-aos="fade-up" data-aos-delay="150">
            My
          </span>
          <span data-aos="fade-up" data-aos-delay="200">
            Name
          </span>
          <span data-aos="fade-up" data-aos-delay="250">
            is
          </span>
        </div>
        <div className="xl:hidden text-4xl font-semibold text-gray-200 pt-2 xl:text-6xl flex items-center gap-2">
          <span data-aos="fade-up" data-aos-delay="300">
            Sumit
          </span>
          <span data-aos="fade-up" data-aos-delay="350">
            Verma
          </span>
        </div>
        {/* <div className="hidden xl:block"> */}
        <TextPressure text={"Sumit"} minFontSize={1} />
        {/* </div> */}
        <div className="text-lg xl:text-xl text-gray-300 font-semibold flex items-center gap-3">
          <span data-aos="fade-up" data-aos-delay="400">
            Senior Frontend Developer
          </span>
          {/* <span data-aos="fade-up" data-aos-delay="450">
            ||
          </span>
          <span data-aos="fade-up" data-aos-delay="500">
            Team Lead
          </span> */}
        </div>
      </div>
    </>
  );
};

export default Name;
