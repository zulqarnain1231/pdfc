import React from "react";
import Image from "next/image";
const FeatureCard = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-5">
      <div className="sm:w-[78px] w-[70px] h-[63px] sm:h-[72px] relative">
        <Image
          src={"/Assets/FeatureIcon.png"}
          className="w-full h-full object-contain"
          alt=""
          fill
        />
      </div>
      <span className="bg-gray-main h-[2px] w-[220px]"></span>
      <h3 className="text-brand-main text-xl sm:text-2xl font-medium text-center">
        Realtime analytics
      </h3>
      <p className="text-black-off sm:text-lg text-base text-center font-normal">
        Create reports with an easy to use drag-and-drop designer.
      </p>
    </div>
  );
};

export default FeatureCard;
