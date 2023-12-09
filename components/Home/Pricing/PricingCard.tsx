import React from "react";
import { LuCheck } from "react-icons/lu";

type Props = {
  title?: string;
  style?: string;
  buttonDark?: boolean;
  subtitle?: any;
};
const PricingCard: React.FC<Props> = ({
  title = "Free",
  style = "bg-white-main border border-transparent",
  buttonDark = false,
  subtitle = "",
}: Props) => {
  return (
    <div
      className={`w-full flex flex-col items-start justify-start gap-10 ${style} shadow-uploadPdf rounded-[30px] px-6 py-10`}
    >
      <div className="w-full items-center flex justify-between">
        <p className="text-brand-main text-xl sm:text-2xl font-medium">
          {title}
        </p>
        {subtitle}
      </div>

      <span className="w-full h-[2px] bg-gray-main"></span>
      <h2 className="text-brand-main text-4xl sm:text-5xl font-bold">
        $45/<span className="text-xl sm:text-2xl">Month</span>
      </h2>
      <p className="text-brand-main text-lg sm:text-xl font-medium">
        Includes 1,000 marketing contacts.
      </p>
      <span className="w-full h-[2px] bg-gray-main"></span>
      <div className="w-full flex flex-col items-start justify-start gap-6">
        {[
          "Outbound email ",
          "messaging",
          "Push messages",
          "Custom bots",
          "Mobile Carousels",
          "Banner messages",
        ].map((item: any, index: number) => (
          <div
            key={index}
            className="w-full flex items-center justify-start gap-3"
          >
            <LuCheck className="text-2xl text-success" />
            <p
              className={`${
                item == "Push messages"
                  ? "text-warning font-bold"
                  : "text-brand-main font-normal"
              } text-lg sm:text-xl `}
            >
              {item}
            </p>
          </div>
        ))}
        <button
          className={`w-full h-[80px] flex items-center justify-center ${
            buttonDark
              ? "bg-brand-main text-white-main"
              : "bg-white-off text-brand-main"
          } text-base sm:text-lg font-semibold rounded-[10px]`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
