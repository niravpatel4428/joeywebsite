"use client";
import React, { useState, ReactNode } from "react";
import plus from "@/public/img/plus.svg";
import minus from "@/public/img/Minus.svg";
import Image from "next/image";

interface AccordionItem {
  question: string;
  answer: ReactNode;
}

interface FaqProps {
  items?: AccordionItem[]; 
}

const accordionItems: AccordionItem[] = [
  {
    question: "Is copywriting included in the services you provide?",
    answer: (
      <>
        While we don&apos;t offer copywriting as a standalone service we do
        prioritize crafting a compelling and engaging tone and voice based on
        your brand&apos;s identity. Needless to say these are defined in{" "}
        <a
          href="/brand-guidelines"
          className="text-primary underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brand Identity Guidelines
        </a>{" "}
        providing you with a framework for future reference and consistency.
      </>
    ),
  },
  {
    question: "What is your design process like?",
    answer:
      "Our design process starts with research and discovery, followed by wireframing, design exploration, and final UI development. We work collaboratively and share iterations throughout.",
  },
  // Repeat or extend as needed...
];

const Faq: React.FC<FaqProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const data = items ?? accordionItems;

  return (
    <section className="relative pt-5 md:pt-16 lg:pt-20 pb-10">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="w-full grid grid-cols-1 sm:grid-cols-12 gap-8">
          <div className="sm:col-span-full md:col-span-4 lg:col-span-3">
            <div className="max-sm:w-fit max-sm:mx-auto">
              <h5 className="text-foreground text-32 xl:text-5xl font-semibold leading-tight tracking-sharp max-sm:text-center">
                FAQs about <br className="block sm:hidden" /> Branding
              </h5>
            </div>
          </div>
          <div className="sm:col-span-full lg:col-span-9">
            <div className="bg-grayLight rounded-32 px-10 sm:ml-10 md:ml-20 lg:ml-0">
              <div className="flex flex-col">
                {data.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="border-b border-[#E6E6E6] last:border-transparent"
                    >
                      {/* Title */}
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="relative pr-8 text-left w-full my-10 group"
                      >
                        <h5 className="text-foreground text-xl font-medium leading-140 tracking-medium group-hover:opacity-70 transition-all duration-300">
                          {item.question}
                        </h5>
                        <div className="w-6 absolute top-1/2 -translate-y-1/2 right-0">
                          <Image
                            src={isOpen ? minus : plus}
                            alt="toggle icon"
                            className="w-6"
                          />
                        </div>
                      </button>

                      {/* Body */}
                      <div
                        className={`transition-all duration-500 ease-in-out overflow-hidden ${
                          isOpen ? "min-h-5" : "max-h-0"
                        }`}
                      >
                        <div className="mb-10">
                          <p className="text-foreground text-xl font-medium leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
