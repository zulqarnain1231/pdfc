"use client";
import React from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();
  const path = usePathname();
  const menu = [
    {
      name: "Features",
      route: `${path == "/" ? "#features" : "/"}`,
    },
    {
      name: "Case",
      route: `${path == "/" ? "#useCase" : "/"}`,
    },
    {
      name: "Pricing",
      route: `${path == "/" ? "#pricing" : "/"}`,
    },
    {
      name: "Extension",
      route: `${path == "/" ? "#faq" : "/"}`,
    },
  ];
  return (
    <footer className="w-full flex flex-col items-center justify-start">
      <ComponentWrapper style="bg-brand-main w-full py-12 lg:py-20">
        <div className="w-full grid lg:grid-cols-[1.5fr,1fr] gap-6">
          <div className="w-full flex flex-col items-center lg:items-start justify-start gap-10">
            <h2 className="text-white-main lg:w-[80%] sm:text-5xl sm:leading-[66px] text-center lg:text-left text-4xl leading-[48px] font-semibold capitalize">
              Ready to get started?
              <span className="bg-success px-2 rounded-lg">Create</span> an
              account today
            </h2>
            <p className="lg:w-[80%] text-white-main lg:text-left text-center text-lg sm:text-xl font-normal">
              Join 13k+ teams who have streamlined the way they manage projects
              and collaborate remotely.
            </p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <button className="sm:h-[80px] h-[70px] w-[230px] flex items-center justify-center hover:scale-105 hover:duration-200 text-base sm:text-lg font-semibold bg-white-main rounded-[10px] text-brand-main">
              Get Started Now
            </button>
          </div>
        </div>
      </ComponentWrapper>
      <ComponentWrapper style="w-full bg-white-main py-12 lg:py-20">
        <div className="w-full flex flex-col items-center justify-center gap-10">
          <nav className="w-full flex flex-wrap items-center justify-center sm:gap-10 gap-4">
            {menu.map((item: any, index: number) => (
              <Link
                key={index}
                href={item.route}
                className="text-brand-main text-lg z-10 font-medium relative after:absolute after:h-[2px] after:w-0 after:bg-brand-main after:bottom-0 after:left-0 hover:after:w-full hover:after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="w-full flex items-center justify-center sm:gap-10 gap-6">
            <Link
              href={"/"}
              className="bg-brand-main text-white-main text-xl h-[34px] w-[34px] flex items-center justify-center rounded-full hover:scale-105 hover:duration-200"
            >
              <FaTwitter />
            </Link>
            <Link
              href={"/"}
              className="bg-brand-main text-white-main text-xl h-[34px] w-[34px] flex items-center justify-center rounded-full hover:scale-105 hover:duration-200"
            >
              <FaFacebookF />
            </Link>
            <Link
              href={"/"}
              className="bg-brand-main text-white-main text-xl h-[34px] w-[34px] flex items-center justify-center rounded-full hover:scale-105 hover:duration-200"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </ComponentWrapper>
      <ComponentWrapper style="w-full bg-brand-main py-3">
        <div className="w-full h-full flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center items-start justify-between">
          <p className="text-sm text-white-main font-normal">
            Copyright © {year} All Rights Reserved.
          </p>
          <p className="text-sm text-white-main font-normal">
            Privacy and Policy
          </p>
        </div>
      </ComponentWrapper>
    </footer>
  );
};

export default Footer;
