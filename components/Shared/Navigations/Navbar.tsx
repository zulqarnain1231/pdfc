"use client";
import React, { useState, useEffect } from "react";
import ComponentWrapper from "../Wrappers/ComponentWrapper";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CgMenuRight } from "react-icons/cg";
import { MdCancel } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import DialogueWrapper from "../Wrappers/DialogueWrapper";
import TextInput from "../Inputs/TextInput";
import PasswordInput from "../Inputs/PasswordInput";
import { Checkbox } from "@mui/material";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false);
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });
  const [signUpInputs, setSignUpInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignUpInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignUpInputs({ ...signUpInputs, [e.target.name]: e.target.value });
  const handleLoginInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
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
  const toggleIsLoginForm = () =>
    setIsLoginForm((prevvalue: boolean) => !prevvalue);
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
      <DialogueWrapper Open={isLoginOpen} CloseEvent={toggleLoginOpen}>
        <form className="w-full h-full flex flex-col items-center justify-start gap-7 p-3">
          <h2 className="text-brand-main text-4xl sm:text-5xl font-medium">
            {isLoginForm ? "Login" : "Sign up"}
          </h2>
          <button
            type="button"
            className="w-full sm:w-[384px] h-[40px] sm:h-[48px] flex flex-shrink-0 items-center justify-center gap-3 text-base sm:text-lg font-medium text-brand-main border-2 border-gray-main rounded-[10px]"
          >
            <FcGoogle size={25} /> Continue with Google
          </button>
          <button
            type="button"
            className="w-full sm:w-[384px] h-[40px] sm:h-[48px] flex flex-shrink-0 items-center justify-center gap-3 text-base sm:text-lg font-medium text-brand-main border-2 border-gray-main rounded-[10px]"
          >
            <FaApple size={25} />{" "}
            {isLoginForm ? "Sign in with Apple" : "Sign up with Apple"}
          </button>
          <span className="h-[1.5px] flex-shrink-0 w-full sm:w-[384px] bg-gray-main"></span>
          {isLoginForm ? (
            <>
              <TextInput
                name="email"
                label="Email Address"
                placeholder="reece08@gmail.com"
                value={loginInputs.email}
                type="email"
                changeEvent={handleLoginInputs}
              />
              <PasswordInput
                changeEvent={handleLoginInputs}
                name="password"
                value={loginInputs.password}
                placeholder="Password"
              />
            </>
          ) : (
            <>
              {" "}
              <TextInput
                name="name"
                label="Name"
                placeholder="Reece Shearer"
                value={signUpInputs.name}
                changeEvent={handleSignUpInputs}
              />
              <TextInput
                name="email"
                label="Email Address"
                placeholder="reece08@gmail.com"
                value={signUpInputs.email}
                type="email"
                changeEvent={handleSignUpInputs}
              />
              <PasswordInput
                changeEvent={handleSignUpInputs}
                name="password"
                label="Enter new password"
                value={signUpInputs.password}
                placeholder="Password"
              />
              <div className="w-full sm:w-[384px] flex items-center justify-start -mt-2">
                <Checkbox
                  sx={{
                    color: "#000",
                    borderRadius: "10px",
                    "&.Mui-checked": {
                      color: "#000B0F",
                    },
                  }}
                />
                <p className="text-sm text-black-off font-normal">
                  I agree to the Terms of Service and Privacy Policy
                </p>
              </div>
            </>
          )}
          <button
            type="submit"
            className="sm:w-[384px] w-full h-[40px] sm:h-[48px] flex-shrink-0 flex items-center justify-center bg-brand-main text-white-main text-base sm:text-lg font-semibold rounded-[10px]"
          >
            Continue
          </button>
          <div className="w-full sm:w-[384px] flex items-center justify-center gap-1">
            <p className="text-sm text-black-off font-normal">
              {isLoginForm
                ? `Don't have an account?`
                : "Already have an account?"}
            </p>{" "}
            <button
              type="button"
              onClick={toggleIsLoginForm}
              className="text-sm text-brand-main font-normal"
            >
              {isLoginForm ? "SignUp" : "Login"}
            </button>
          </div>
          <span className="h-[10px] bg-transparent flex-shrink-0 w-full py-2 pointer-events-none"></span>
        </form>
      </DialogueWrapper>
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
