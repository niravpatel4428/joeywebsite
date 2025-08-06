import React from "react";
import collabrate from "@/public/img/collabrate.svg";
import Image from "next/image";
export const features = [
  {
    icon: collabrate,
    title: "Enterprise Security",
    description:
      "Zero-trust architecture, SOC 2 certified facilities, and comprehensive threat monitoring protect your applications and data. Every agent runs in isolated environments with real time security analysis and automated incident response.",
  },
  {
    icon: collabrate,
    title: "Developer First",
    description:
      "Simple API integration, comprehensive documentation, and dedicated technical support make deployment effortless. Focus on building your application while we handle the complex AI infrastructure and maintenance.",
  },
  {
    icon: collabrate,
    title: "Production Ready",
    description:
      "Guaranteed uptime, auto scaling capabilities, and performance optimized agents ensure your applications run reliably at any scale. Our platform handles traffic spikes automatically while maintaining consistent performance.",
  },
];

const Collaborate = () => {
  return (
    <section className="relative pt-5 pb-7 md:pt-3 md:pb-10 xl:pt-16 xl:pb-28">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        {/* title block */}
        <div className="mb-10 lg:mb-14 xl:mb-16">
          <h2 className="text-foreground text-32 sm:text-5xl md:text-84 font-semibold leading-tight tracking-[-0.84px]">
            Why build with me?
          </h2>
        </div>

        {/* block */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-20 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-3">
                <div className="block">
                  <h3 className="text-foreground text-2xl font-bold leading-140 tracking-low">
                    {feature.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-foreground text-lg font-medium leading-140 tracking-low">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collaborate;
