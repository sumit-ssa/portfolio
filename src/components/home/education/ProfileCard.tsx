import Image from "next/image";
import React from "react";
import { ProfileProps } from "@/types";

const ProfileCard = ({ data }: { data: ProfileProps }) => {
  //   console.log(data);
  return (
    <div className="w-full flex flex-col xl:flex-row items-start justify-between bg-black border border-gray-500 rounded-lg px-6 py-3">
      <div className="w-full flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src={data?.logo}
            alt="University logo"
            width={40}
            height={40}
            className="rounded-full object-contain xl:w-[60px] xl:h-[60px]"
            data-aos="fade-up"
            data-aos-delay="200"
          />
        </div>
        <div className="flex flex-col">
          <h2
            className="text-lg font-semibold text-gray-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {data?.name}
          </h2>
          <p
            className="text-base text-gray-400 font-medium"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {data?.course}
          </p>
          <p
            className="text-sm text-gray-500"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {data?.location}
          </p>
        </div>
      </div>
      {data?.showRightSide && (
        <div className="w-full flex flex-col items-end mt-2 xl:mt-0">
          <div className=" flex items-center gap-2">
            <h2
              className="text-sm text-gray-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {data?.startDate}
            </h2>
            <span data-aos="fade-up" data-aos-delay="150">
              -
            </span>
            <h2
              className="text-sm text-gray-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {data?.endDate}
            </h2>
          </div>
          <h2
            className="text-sm text-gray-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {data?.duration}
          </h2>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
