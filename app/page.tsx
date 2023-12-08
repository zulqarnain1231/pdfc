import Features from "@/components/Home/Features/Features";
import Hero from "@/components/Home/Hero/Hero";
import Navbar from "@/components/Shared/Navigations/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full lg:h-[100dvh] relative">
        <Navbar />
        <Hero />
        <div className="absolute lg:w-1/2 w-full lg:h-[1000px] h-full right-0 top-0 z-0">
          <div className="w-full h-full relative">
            <Image
              src={"/Assets/HeroBg.png"}
              className="w-full h-full object-contain pointer-events-none"
              alt=""
              fill
            />
          </div>
        </div>
      </div>
      <Features />
    </main>
  );
}
