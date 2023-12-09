"use client";
import React, { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
type Props = {
  name: string;
  label?: string;
  value: string;
  changeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};
const PasswordInput: React.FC<Props> = ({
  name,
  value,
  changeEvent,
  placeholder,
  label = "Password",
}) => {
  const [typePassword, setTypePassword] = useState(true);
  const toggleType = () => setTypePassword((prevvalue: boolean) => !prevvalue);
  return (
    <div className="w-full sm:w-[384px] flex flex-col items-start justify-start gap-3">
      <p className="text-sm text-black-off fonr-normal">{label}</p>
      <div className="w-full h-[40px] sm:h-[48px] border-2 border-gray-main focus-within:border-brand-main focus-within:shadow-lg rounded-[10px] relative ">
        <input
          className="w-full h-full focus:outline-none  px-4 text-brand-main text-bse sm:text-lg font-normal placeholder:text-base sm:placeholder:text-lg placeholder:font-normal rounded-[10px]"
          type={typePassword ? "password" : "text"}
          name={name}
          value={value}
          onChange={changeEvent}
          required
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={toggleType}
          className="absolute sm:top-3 top-1.5 right-4 text-2xl text-black-off"
        >
          {typePassword ? <IoEye /> : <IoEyeOff />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
