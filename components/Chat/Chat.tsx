"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import { IoPersonSharp } from "react-icons/io5";
import { RiSparklingFill } from "react-icons/ri";
import { BsFillSendFill } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import {
  GoChevronUp,
  GoChevronDown,
  GoZoomIn,
  GoZoomOut,
} from "react-icons/go";
import { SlCursorMove } from "react-icons/sl";
import { TfiPrinter } from "react-icons/tfi";
const Chat = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault();
  return (
    <ComponentWrapper style="lg:py-28 py-20 ">
      <div className="w-full h-full flex flex-col items-center justify-start gap-12">
        <h2 className="text-brand-main text-4xl text-center sm:text-5xl font-semibold">
          Chat with employee training documents
        </h2>
        <p className="text-base sm:text-lg text-black-off text-center lg:w-[70%] font-normal">
          Boring training sessions, be gone! With PDF.ai, training documents
          become interactive buddies, making learning fun, engaging, and as easy
          as chatting with a friend.
        </p>
        <div className="w-full grid lg:grid-cols-2 gap-8">
          {/* pdf viewr */}
          <div className="w-full md:h-[700px] h-[550px] bg-white-main shadow-uploadPdf">
            {/* toolbar */}
            <div className="w-full h-[54px] flex items-center justify-between border border-white-off px-3 ">
              {/* pages */}
              <div className="h-full flex items-center justify-start gap-4">
                <GoChevronUp className="text-2xl text-white-secondary" />
                <span className="flex items-center justify-center gap-1 text-base text-brand-main font-normal">
                  {" "}
                  <span className="h-[37px] w-[46px] flex items-center justify-center border border-white-off rounded-md">
                    1
                  </span>{" "}
                  <p className="text-base text-brand-main font-normal">/3</p>
                </span>

                <GoChevronDown className="text-2xl text-brand-main" />
              </div>
              {/* zoom */}
              <div className="h-full sm:flex hidden items-center justify-center gap-4">
                <GoZoomOut className="text-xl text-brand-main" />
                <p className="text-base text-brand-main font-normal">75%</p>
                <GoZoomIn className="text-xl text-brand-main" />
              </div>
              {/* options */}
              <div className="h-full flex items-center justify-center gap-4">
                <SlCursorMove className="text-xl text-brand-main" />
                <TfiPrinter className="text-xl text-brand-main" />
                <PiDotsThreeOutlineVerticalLight className="text-xl text-brand-main" />
              </div>
            </div>
            {/* pdf here */}
            <div className="w-full h-[calc(100%-54px)] overflow-auto thinScroll px-4 pt-2"></div>
          </div>
          {/* chat side */}
          <div className="w-full md:h-[700px] h-[550px] lg:h-full flex flex-col items-center justify-between bg-white-main shadow-uploadPdf px-4 py-6">
            <div className="w-full flex flex-col items-center justify-start gap-10">
              <div className="w-full flex items-center justify-start gap-4">
                <span className="h-[40px] w-[40px] flex flex-shrink-0 items-center justify-center border border-white-off rounded-full">
                  <IoPersonSharp className="text-purple text-xl" />
                </span>
                <span className="h-[60px] w-full flex items-center justify-start px-4 border border-white-off rounded-xl text-brand-main text-base font-medium">
                  The advantages of Artificial Intelligence
                </span>
              </div>
              <div className="w-full flex items-start justify-start gap-4">
                <span className="h-[40px] w-[40px] flex flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-blueish to-purple text-white-main text-xl">
                  <RiSparklingFill />
                </span>
                <div className="w-full flex flex-col items-start justify-start gap-4">
                  <p className="text-brand-main text-sm font-normal">
                    Artificial Intelligence (AI) offers numerous advantages and
                    has the potential to revolutionize various aspects of our
                    lives. Here are some key advantages of AI:
                  </p>
                  <ol type="1">
                    <li className="text-brand-main text-sm font-normal">
                      1. Automation: AI can automate repetitive and mundane
                      tasks, saving time and effort for humans. It can handle
                      large volumes of data, perform complex calculations, and
                      execute tasks with precision and consistency. This
                      automation leads to increased productivity and efficiency
                      in various industries.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="w-full flex items-center justify-start gap-3"
            >
              <input
                type="text"
                placeholder="The advantages of Artificial Intelligence"
                className="sm:h-[54px] h-[46px] w-full px-4 border border-white-off rounded-[45px] focus:outline-none text-sm text-brand-main font-medium"
                required
              />
              <button
                type="submit"
                className="sm:w-[88px] w-[70px] sm:h-[54px] h-[46px] flex flex-shrink-0 items-center justify-center text-xl text-white-main rounded-[45px] bg-gradient-to-b from-blueish to-purple"
              >
                <BsFillSendFill />
              </button>
            </form>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Chat;
