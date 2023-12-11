"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  GoChevronUp,
  GoChevronDown,
  GoZoomOut,
  GoZoomIn,
} from "react-icons/go";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { SlCursorMove } from "react-icons/sl";
import { TfiPrinter } from "react-icons/tfi";
import { fileContext } from "@/context/context";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = () => {
  const { file } = useContext(fileContext);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1); // start on first page
  const [loading, setLoading] = useState(true);
  const [pageWidth, setPageWidth] = useState(0);
  const onDocumentLoadSuccess = ({
    numPages: nextNumPages,
  }: {
    numPages: number;
  }) => {
    setNumPages(nextNumPages);
  };
  const onPageLoadSuccess = () => {
    setPageWidth(window.innerWidth - 700);
    console.log(file);
    setLoading(false);
  };

  //   useEffect(() => {
  //     setLoading(true); // Set loading to true when the file changes
  //     setPageNumber(1); // Reset page number when the file changes
  //   }, [file]);
  const goToNextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const goToPreviousPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };
  const handlePrint = () => {
    const printWindow = window.open("", "_blank");

    if (printWindow) {
      printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            body { margin: 0; }
            @media print {
              body { margin: 0.5cm; }
              iframe { width: 100%; height: 100vh; }
            }
          </style>
        </head>
        <body>
          <iframe src="${file?.name}" width="100%" height="100%" type="application/pdf"></iframe>
        </body>
      </html>
    `);

      printWindow.document.close();
      printWindow.print();
    } else {
      alert("Popup blocked. Please allow popups for this site to print.");
    }
  };

  const options = {
    cMapUrl: "cmaps/",
    cMapPacked: true,
    standardFontDataUrl: "standard_fonts/",
  };
  console.log(file);
  return (
    <div className="w-full md:h-[700px] h-[550px] bg-white-main shadow-uploadPdf">
      {/* toolbar */}
      <div className="w-full h-[54px] flex items-center justify-between border border-white-off px-3 ">
        {/* pages */}
        <div className="h-full flex items-center justify-start gap-4">
          <button
            disabled={pageNumber == 1}
            onClick={goToPreviousPage}
            className="disabled:text-white-secondary text-brand-main"
          >
            <GoChevronUp className="text-2xl  " />
          </button>

          <span className="flex items-center justify-center gap-1 text-base text-brand-main font-normal">
            {" "}
            <span className="h-[37px] w-[46px] flex items-center justify-center border border-white-off rounded-md">
              {pageNumber}
            </span>{" "}
            <p className="text-base  text-brand-main font-normal">
              /{numPages}
            </p>
          </span>
          <button
            onClick={goToNextPage}
            disabled={pageNumber === numPages}
            className="disabled:text-white-secondary text-brand-main"
          >
            {" "}
            <GoChevronDown className="text-2xl " />
          </button>
        </div>
        {/* zoom */}
        <div className="h-full sm:flex hidden items-center justify-center gap-4">
          <GoZoomOut className="text-xl text-brand-main" />
          <p className="text-base text-brand-main font-normal">75%</p>
          <GoZoomIn className="text-xl text-brand-main" />
        </div>
        {/* options */}
        <div className="h-full flex items-center justify-center gap-4">
          <SlCursorMove className="text-xl text-brand-main" />
          <button onClick={() => {}}>
            <TfiPrinter className="text-xl text-brand-main" />
          </button>

          <PiDotsThreeOutlineVerticalLight className="text-xl text-brand-main" />
        </div>
      </div>
      {/* pdf here */}
      <div className="w-full h-[calc(100%-54px)] overflow-auto thinScroll px-4 pt-2">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          //   options={options}
          renderMode="canvas"
          //   className=""
        >
          <Page
            className="sm:hidden flex"
            key={pageNumber}
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            onLoadSuccess={onPageLoadSuccess}
            // onRenderError={() => setLoading(false)}
            width={Math.max(pageWidth * 0.1, 300)}
            // renderAnnotationLayer={false}
            // renderTextLayer={false}
          />
          <Page
            className="sm:flex hidden"
            key={pageNumber}
            pageNumber={pageNumber}
            renderAnnotationLayer={false}
            renderTextLayer={false}
            onLoadSuccess={onPageLoadSuccess}
            // onRenderError={() => setLoading(false)}
            width={Math.max(pageWidth * 0.8, 390)}
            // renderAnnotationLayer={false}
            // renderTextLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
