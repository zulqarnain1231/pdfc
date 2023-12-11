"use client";
import React, { ChangeEvent, useContext, useState } from "react";
import { fileContext } from "@/context/context";
import { useRouter } from "next/navigation";
const PdfUpload = () => {
  const { file, setFile } = useContext(fileContext);
  const [fileName, setFileName] = useState<string | undefined>(
    "htttps://example.com/abcdef"
  );
  const router = useRouter();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    console.log(selectedFile);
    setFileName(selectedFile?.name);
    setFile(selectedFile || null);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/chat");
  };
  return (
    <aside className="w-full h-full flex flex-col items-center justify-center">
      <div className="sm:h-[450px] h-[300px] w-full bg-white-main z-10 rounded-2xl shadow-uploadPdf border-[6px] border-white-off sm:p-10 p-5">
        <div className="w-full h-full flex flex-col items-center justify-center gap-8 border-[3px] border-black-secondary border-dashed rounded-[10px] px-2">
          <div className="w-full flex flex-col items-center justify-center gap-2">
            <p className="text-balck-off text-xl font-bold z-10">
              Please Drop PDF{" "}
            </p>
            <p className="text-black-off text-xl font-normal z-10">
              or click to browse
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="sm:w-[350px] w-full sm:h-[55px] h-auto py-2 px-4 flex sm:flex-row flex-col items-center justify-between gap-3 sm:gap-0 border border-[#E2E8F0] rounded-lg"
          >
            <label
              htmlFor="fileInput"
              className="w-full sm:w-[calc(100%-64px)] sm:h-[41px] h-[32px] z-20 relative cursor-pointer"
            >
              <input
                id="fileInput"
                type="file"
                accept="application/pdf"
                onChange={handleFileChange}
                required
                className="w-full h-full z-50 opacity-0 absolute top-0 left-0 cursor-pointer border-0"
              />{" "}
              <input
                type="text"
                placeholder={fileName}
                className="z-10 w-full h-full focus:outline-none border-none text-sm text-black-off placeholder:text-black-off font-medium"
                autoComplete="off"
              />
            </label>
            <button
              type="submit"
              className="sm:h-[41px] h-[32px] w-[64px] flex-shrink-0 z-10 flex items-center justify-center text-white-main font-semibold text-base bg-brand-main rounded-md"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </aside>
  );
};

export default PdfUpload;
