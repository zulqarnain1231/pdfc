import React from "react";

type Props = {
  name: string;
  label: string;
  type?: string;
  value: string;
  changeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};
const TextInput: React.FC<Props> = ({
  name,
  type = "text",
  value,
  changeEvent,
  placeholder,
  label,
}) => {
  return (
    <div className="w-full sm:w-[384px] flex flex-col items-start justify-start gap-3">
      <p className="text-sm text-black-off fonr-normal">{label}</p>
      <input
        className="w-full h-[40px] sm:h-[48px] border-2 border-gray-main rounded-[10px] focus:outline-none focus:border-brand-main focus:shadow-lg px-4 text-brand-main text-bse sm:text-lg font-normal placeholder:text-base sm:placeholder:text-lg placeholder:font-normal"
        type={type}
        name={name}
        value={value}
        onChange={changeEvent}
        required
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
