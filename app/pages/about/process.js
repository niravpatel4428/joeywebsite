"use client";
import React from "react";

export const processSteps = [
  {
    title: "Discovery",
    description:
      "To start, we'll acquire comprehension of your company and how consumers interact with your offerings. In this phase, recognizing the core issue will be accomplished by examining and studying the collected data.",
  },
  {
    title: "Strategy",
    description:
      "Utilizing the collected data, we'll create a design plan focused on user needs, aiming to tackle user issues and boost your company's performance.",
  },
  {
    title: "Design",
    description:
      "I will proceed to roll up my sleeves and craft functional, engaging interfaces that adhere to visual guidelines, ensuring a consistent brand identity. Above all, the design will adeptly tackle user and business concerns in a seamless and proficient way.",
  },
  {
    title: "Implementation",
    description:
      "Following the manipulation of countless pixels and crafting the code, we'll possess a finalized project prepared for worldwide distribution. This endeavor might necessitate substantial coffee consumption to maintain my energy levels.",
  },
];
const Process = () => {
  return (
    <section className="relative pt-7 md:pt-10 lg:pt-16 xl:pt-28 pb-5 md:pb-0 xl:pb-40">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="mb-8 md:mb-10 xl:mb-28">
          <h3 className="text-foreground text-[32px] xl:text-5xl font-semibold leading-tight tracking-sharp">
            Design Process
          </h3>
        </div>

        <div className="flex flex-col gap-8 sm:gap-10 sm:[&>*:nth-child(even)]:ml-auto sm:[&>*:first-child]:pt-0 sm:[&>*:first-child]:border-none">
          {processSteps.map((step, index) => (
            <div key={index} className="w-full sm:w-[49%] sm:border-t sm:border-[#E6E6E6] sm:pt-8 lg:pt-12 xl:pt-16">
              <h4 className="text-foreground text-xl lg:text-2xl font-semibold leading-tight -tracking-low">
                {String(index + 1).padStart(2, "0")} — <br />
                {step.title}
              </h4>
              <div className="mt-5 lg:mt-6 flex flex-col gap-2 last:mb-0">
                <p className="text-foreground text-base lg:text-xl font-medium leading-140 tracking-low">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
