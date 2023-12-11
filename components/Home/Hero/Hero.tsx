import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import PdfUpload from "./PdfUpload";

const Hero = () => {
  return (
    <ComponentWrapper style="lg:h-[calc(100dvh-90px)] w-full z-10">
      <div className="w-full h-full grid lg:grid-cols-2 lg:pt-28 pt-[96px] gap-8">
        <aside className="w-full h-full flex flex-col items-center lg:items-start justify-center gap-10">
          <h1 className="text-brand-main md:text-[80px] md:leading-[92px] text-5xl font-extrabold z-10">
            Chat with any PDF Document
          </h1>
          <p className="text-black-off text-base font-normal lg:w-[60%] z-10">
            From legal agreements to financial reports, PDF.ai brings your
            documents to life. You can ask questions, get summaries, find
            information, and more.
          </p>
        </aside>
        <PdfUpload />
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
