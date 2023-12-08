import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:h-[calc(100dvh-90px)] w-full">
      <div className="w-full h-full grid lg:grid-cols-2 lg:py-0 py-10 gap-8">
        <aside className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-10">
          <h1 className="text-brand-main md:text-[80px] md:leading-[92px] text-5xl font-extrabold">
            Chat with any PDF Document
          </h1>
          <p className="text-black-off text-base font-normal lg:w-[60%]">
            From legal agreements to financial reports, PDF.ai brings your
            documents to life. You can ask questions, get summaries, find
            information, and more.
          </p>
        </aside>
        <aside className="w-full h-full flex flex-col items-center justify-center">
          <div className="sm:h-[450px] h-[300px] w-full bg-white-main rounded-2xl shadow-uploadPdf border-[6px] border-white-off sm:p-10 p-5">
            <div className="w-full h-full flex flex-col items-center justify-center gap-8 border-[3px] border-black-secondary border-dashed rounded-[10px] px-2">
              <div className="w-full flex flex-col items-center justify-center gap-2">
                <p className="text-balck-off text-xl font-bold">
                  Please Drop PDF{" "}
                </p>
                <p className="text-black-off text-xl font-normal">
                  or click to browse
                </p>
              </div>
              <div className="sm:w-[350px] w-full sm:h-[55px] h-auto py-2 px-4 flex sm:flex-row flex-col items-center justify-between border border-[#E2E8F0] rounded-lg">
                <input
                  type="text"
                  placeholder="htttps://example.com/abcdef"
                  className="sm:w-[calc(100%-64px)] w-full h-full focus:outline-none border-none text-sm text-black-off placeholder:text-black-off font-medium"
                  autoComplete="off"
                />
                <button className="h-[41px] w-[64px] flex items-center justify-center text-white-main font-semibold text-base bg-brand-main rounded-md">
                  Go
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
