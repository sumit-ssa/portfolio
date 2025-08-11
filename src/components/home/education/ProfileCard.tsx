"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ProfileProps } from "@/types";
import { ChevronRight } from "lucide-react";

const ProfileCard = ({ data }: { data: ProfileProps }) => {
  const [showInfo, setShowInfo] = useState(false);

  const infoHandler = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div
      className="w-full flex flex-col xl:flex-row items-start justify-between group cursor-pointer bg-black border border-gray-500 rounded-lg px-6 py-3"
      data-aos="fade-up"
      data-aos-delay="300"
      onClick={infoHandler}
    >
      <div className={`w-full flex items-center gap-4`}>
        <div className="flex-shrink-0">
          <Image
            src={data?.logo}
            alt="University logo"
            width={40}
            height={40}
            className="rounded-full object-contain xl:w-[60px] xl:h-[60px]"
          />
        </div>
        <div className="w-full flex flex-col">
          <h2 className="w-full flex items-center gap-1 text-lg font-semibold text-gray-300">
            {data?.name}
            {data?.info && (
              <span className="hidden group-hover:block transition-all duration-700">
                <ChevronRight
                  className={`h-5 w-5 transition-all duration-700 ${
                    showInfo && "rotate-90 "
                  } `}
                />
              </span>
            )}
          </h2>
          <p className="text-base text-blue-400 font-medium">{data?.course}</p>
          <p className="text-sm text-gray-500">{data?.location}</p>
          <div
            className={`mt-2 w-full overflow-hidden capitalize text-gray-300 transition-all duration-700 ease-linear  ${
              showInfo ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            {data?.info}
          </div>
        </div>
      </div>
      {data?.showRightSide && (
        <div className="w-full xl:w-0 xl:min-w-max flex flex-col items-end mt-2 xl:mt-0">
          <div className=" flex items-center gap-2">
            <h2 className="text-sm text-gray-300">{data?.startDate}</h2>
            <span>-</span>
            <h2 className="text-sm text-gray-300">{data?.endDate}</h2>
          </div>
          <h2 className="text-sm text-gray-300">{data?.duration}</h2>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
