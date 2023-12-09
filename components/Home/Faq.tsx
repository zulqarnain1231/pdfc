"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { BsChevronDown } from "react-icons/bs";

const Faqs = () => {
  const faqs = [
    {
      Title: "Who is Communications Saasinyo for?",
      AriaControls: "panel1a-content",
      Id: "panel1a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "How Secure Is My Data With Saasinyo SaaS?",
      AriaControls: "panel2a-content",
      Id: "panel2a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "What Is The Uptime Guarantee?",
      AriaControls: "panel3a-content",
      Id: "panel3a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "How Can I Add More Emails To My Account?",
      AriaControls: "panel4a-content",
      Id: "panel4a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "How do I get started with Communications?",
      AriaControls: "panel5a-content",
      Id: "panel4a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "What is Saasimi Communications?",
      AriaControls: "panel6a-content",
      Id: "panel4a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "How Does Saasinyo Compare To The Competition?",
      AriaControls: "panel7a-content",
      Id: "panel7a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
    {
      Title: "Who is Communications Saasinyo for?",
      AriaControls: "panel8a-content",
      Id: "panel8a-header",
      Detail:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.",
    },
  ];
  return (
    <ComponentWrapper id="faq" style="lg:py-20 py-10 relative">
      <div className="w-full flex flex-col items-center justify-start sm:gap-20 gap-16">
        <div className="w-full flex flex-col items-center justify-start gap-8">
          <h2 className="text-brand-main sm:text-5xl text-center text-4xl font-semibold">
            Frequently asked questions
          </h2>
          <p className="text-brand-main sm:text-lg text-base text-center font-normal">
            We have put together some commonly asked questions
          </p>
        </div>

        <div className="w-full grid md:grid-cols-2 gap-3 md:gap-5 lg:gap-8">
          {faqs.map((item: any, index: number) => {
            return (
              <Accordion sx={{ boxShadow: "none" }} key={index}>
                <AccordionSummary
                  sx={{ fontFamily: "Poppins" }}
                  expandIcon={
                    <BsChevronDown className="text-brand-main text-2xl" />
                  }
                  aria-controls={item.AriaControls}
                  id={item.Id}
                >
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontFamily: "Poppins",
                      color: "#000B0F",
                      fontSize: "18px",
                    }}
                  >
                    {item.Title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "medium",
                      color: "##000B0F",
                      fontSize: "16px",
                    }}
                  >
                    {item.Detail}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Faqs;
