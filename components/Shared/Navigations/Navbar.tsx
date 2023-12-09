"use client";
import React, { useState, useEffect } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgMenuRight } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import Drawer from "@mui/material/Drawer";
import AuthPopup from "@/components/Home/Auth/AuthPopup";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);

  const path = usePathname();
  // Function to handle the scroll event
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // function fpr smooth scrolling

    let navLinks = document.querySelectorAll("nav a");
    function smoothScroll(this: any, event: any) {
      event.preventDefault();

      const href = this.getAttribute("href");

      document.querySelector(href).scrollIntoView({
        behavior: "smooth",
      });
    }
    if (path == "/") {
      for (const link of navLinks) {
        link.addEventListener("click", smoothScroll);
      }
    }
  }, [path]);
  const toggleDrawer = () =>
    setIsDrawerOpen((prevvalue: boolean) => !prevvalue);
  const toggleLoginOpen = () =>
    setIsLoginOpen((prevvalue: boolean) => !prevvalue);
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
    <>
      <ComponentWrapper
        style={`z-50 ${
          isScrolled ? "bg-white-main" : "bg-transparent"
        } fixed h-[90px] w-full duration-300`}
      >
        <nav className="w-full h-full flex items-center justify-between">
          <Link
            href={"/"}
            className="sm:h-[40px] h-[34px] sm:w-[210px] w-[180px] relative"
          >
            <Image
              src={"/Assets/Logo.png"}
              className="w-full h-full object-contain"
              alt=""
              fill
            />
          </Link>
          <div className="min-[840px]:flex hidden items-center justify-center gap-7">
            {menu.map((item: any, index: number) => (
              <Link
                key={index}
                href={item.route}
                className="text-brand-main text-lg z-10 font-medium relative after:absolute after:h-[2px] after:w-0 after:bg-brand-main after:bottom-0 after:left-0 hover:after:w-full hover:after:duration-300"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLoginOpen}
              className="h-[50px] w-[140px] z-10 flex items-center justify-center rounded-[7px] hover:scale-105 hover:duration-200 text-white-main text-lg font-semibold bg-brand-main"
            >
              Join Now
            </button>
          </div>
          <button
            onClick={toggleDrawer}
            className="min-[840px]:hidden flex items-center z-50 justify-center text-brand-main text-3xl"
          >
            <CgMenuRight />
          </button>
        </nav>
      </ComponentWrapper>
      <AuthPopup
        isLoginOpen={isLoginOpen}
        toggleIsLoginOpen={toggleLoginOpen}
      />
      <Drawer
        transitionDuration={500}
        anchor={"right"}
        sx={{
          "& .MuiPaper-root": {
            height: "100vh",
            width: "100%",
          },
        }}
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <div className="w-full h-full flex flex-col items-center justify-start gap-10 p-5">
          <div className="w-full flex items-center justify-end">
            <button onClick={toggleDrawer}>
              <MdCancel className="text-red-600 text-3xl" />
            </button>
          </div>
          {menu.map((item: any, index: number) => (
            <Link
              onClick={toggleDrawer}
              key={index}
              href={item.route}
              className="text-brand-main text-lg font-medium relative after:absolute after:h-[2px] after:w-0 after:bg-brand-main after:bottom-0 after:left-0 hover:after:w-full hover:after:duration-300"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleDrawer();
              toggleLoginOpen();
            }}
            className="h-[50px] w-[140px] flex items-center justify-center rounded-[7px] hover:scale-105 hover:duration-200 text-white-main text-lg font-semibold bg-brand-main"
          >
            Join Now
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
