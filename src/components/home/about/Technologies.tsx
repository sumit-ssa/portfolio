import { TechnologiesData } from "@/constant";

const Technologies = () => {
  return (
    <>
      <div className="w-full text-start text-xl text-blue-400 font-medium mt-8">
        Technologies and Tools
      </div>
      <div className="w-full grid grid-cols-2 xl:grid-cols-5 gap-4 mt-4">
        {TechnologiesData?.map((data, i) => {
          const duration = 100 * (i + 1);
          return (
            <div
              key={i}
              className="w-full flex items-center justify-between py-3 px-4 border border-gray-500 rounded cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={duration}
            >
              <span className="font-medium">{data?.name}</span>
              <i className={`${data?.icon} colored`}></i>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Technologies;
