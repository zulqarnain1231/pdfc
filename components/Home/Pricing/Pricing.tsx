"use client";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import IOSSwitch from "./ToggleSwitch";

const Pricing = () => {
  return (
    <section id="pricing w-full">
      <ComponentWrapper style="bg-brand-main lg:py-20 py-12">
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
    </section>
  );
};

export default Pricing;
