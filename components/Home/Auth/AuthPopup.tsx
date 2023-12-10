"use client";
import PasswordInput from "@/components/Shared/Inputs/PasswordInput";
import TextInput from "@/components/Shared/Inputs/TextInput";
import DialogueWrapper from "@/components/Shared/Wrappers/DialogueWrapper";
import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

type Props = {
  isLoginOpen: boolean;
  toggleIsLoginOpen: () => void;
};
const AuthPopup: React.FC<Props> = ({ isLoginOpen, toggleIsLoginOpen }) => {
  const [isLoginForm, setIsLoginForm] = useState<boolean>(false);
  const [loginInputs, setLoginInputs] = useState({
    email: "",
    password: "",
  });
  const [signUpInputs, setSignUpInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSignUpInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSignUpInputs({ ...signUpInputs, [e.target.name]: e.target.value });
  const handleLoginInputs = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  const toggleIsLoginForm = () =>
    setIsLoginForm((prevvalue: boolean) => !prevvalue);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleIsLoginOpen();
  };
  return (
    <DialogueWrapper Open={isLoginOpen} CloseEvent={toggleIsLoginOpen}>
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col items-center justify-start gap-7 p-3"
      >
        <h2 className="text-brand-main text-4xl sm:text-5xl font-semibold">
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
  );
};

export default AuthPopup;
