"use client";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import IOSSwitch from "./ToggleSwitch";
import { FaStar } from "react-icons/fa6";
import PricingCard from "./PricingCard";
const Pricing = () => {
  return (
    <section id="pricing" className="w-full">
      <ComponentWrapper style="bg-brand-main lg:pt-20 lg:pb-32 py-12">
        <div className="w-full flex flex-col items-center justify-start gap-10">
          <h2 className="text-white-main sm:text-5xl text-center text-4xl font-semibold capitalize">
            Ready to get started?
          </h2>
          <p className="capitalize text-white-main text-center text-lg sm:text-xl font-normal">
            14 days unlimited free trial. No contract or credit card required.
          </p>
          <div className="w-full flex items-center justify-center gap-2">
            <p className="capitalize text-white-main text-center text-lg sm:text-xl font-semibold">
              Monthly
            </p>
            <IOSSwitch sx={{ m: 1 }} />
            <p className="capitalize text-white-main text-center text-lg sm:text-xl font-semibold">
              Yearly
            </p>
          </div>
        </div>
      </ComponentWrapper>
      <ComponentWrapper style="lg:-mt-20 lg:pb-20 lg:pt-0 py-12">
        <div className="w-full grid lg:grid-cols-3 gap-8 lg:gap-4 xl:gap-8">
          <PricingCard />
          <PricingCard
            title="Premium"
            buttonDark
            style="border border-[#318FF5] bg-[#E6F0FD]"
            subtitle={
              <span className="flex items-center justify-center text-xl text-white-main bg-warning rounded-full h-[40px] w-[40px]">
                <FaStar />
              </span>
            }
          />
          <PricingCard
            title="Premium"
            subtitle={
              <p className="text-warning text-xl sm:text-2xl font-semibold">
                -30% off
              </p>
            }
          />
        </div>
      </ComponentWrapper>
    </section>
  );
};

export default Pricing;
