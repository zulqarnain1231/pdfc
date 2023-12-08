import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import React from "react";
import Image from "next/image";
import ProductBadge from "./ProductBadge";
import FeatureCard from "./FeatureCard";
const Features = () => {
  return (
    <ComponentWrapper id="features" style="lg:py-20 py-12">
      <div className="w-full flex flex-col items-center justify-start md:gap-28 gap-20">
        <div className="lg:w-[80%] w-full grid md:grid-cols-3 md:gap-12 gap-5">
          <ProductBadge />
          <ProductBadge />
          <ProductBadge />
        </div>
        <div className="w-full flex flex-col items-center justify-start gap-16">
          <h2 className="text-brand-main sm:text-5xl text-center text-4xl font-semibold">
            Some Amazing Features
          </h2>
          <div className="w-full grid lg:grid-cols-3 gap-8">
            <FeatureCard />
            <FeatureCard />
            <FeatureCard />
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Features;
