"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { GoArrowUpRight } from "react-icons/go";
const UseCase = () => {
  return (
    <section
      id="useCase"
      className="w-full flex flex-col items-start justify-start md:gap-20 gap-12 bg-brand-main lg:py-20 py-12"
    >
      <ComponentWrapper style="w-full">
        <div className="w-full flex flex-col items-center md:items-start justify-start gap-10">
          <h2 className="text-white-main sm:text-5xl text-center text-4xl font-semibold capitalize">
            Built for any use{" "}
            <span className="bg-success px-2 rounded-lg">case</span>
          </h2>
          <p className="capitalize text-white-main md:text-left text-center text-lg sm:text-xl font-normal">
            Built for any use case <br /> Click on each option to try it out 👇
          </p>
        </div>
      </ComponentWrapper>
      <Marquee className="w-full">
        {[0, 1, 2, 3, 4, 5, 6].map((item: any, index: number) => (
          <Link
            key={index}
            href={"/"}
            className="px-10 py-4 flex items-center justify-center gap-3 text-white-main text-xl sm:text-2xl font-normal rounded-lg bg-success mx-4"
          >
            Legal_documents.pdf
            <GoArrowUpRight />
          </Link>
        ))}
      </Marquee>
    </section>
  );
};

export default UseCase;
