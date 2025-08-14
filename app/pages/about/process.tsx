"use client";
import React from "react";

export const processSteps = [
  {
    title: "Agent Discovery",
    description:
      "We continuously scout the open source AI ecosystem to identify the most promising and innovative agents. Our technical team evaluates each agent for performance, reliability, and real world applicability, selecting only those that meet our strict standards for enterprise deployment.",
  },
  {
    title: "Security Hardening",
    description:
      "Every selected agent undergoes comprehensive security analysis and performance optimization. We implement zero-trust architecture, configure isolated environments, and enhance the agent's capabilities while ensuring it meets enterprise grade security and compliance requirements.",
  },
  {
    title: "Private Cloud Deployment",
    description:
      "Agents are deployed on our secure, SOC 2 certified infrastructure with dedicated resources and comprehensive monitoring. Each agent runs in its own protected enclave with real-time threat detection, automated backups, and guaranteed uptime for mission critical applications.",
  },
  {
    title: "API Integration",
    description:
      "We provide simple, well documented APIs that make agent integration effortless for developers. Our platform includes comprehensive developer tools, detailed documentation, and ongoing technical support to ensure seamless deployment and optimal performance in your applications.",
  },
];
const Process = () => {
  return (
    <section className="relative pt-7 md:pt-10 lg:pt-16 xl:pt-28 pb-5 md:pb-0 xl:pb-40">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="mb-8 md:mb-10 xl:mb-28">
          <h3 className="text-foreground text-32 xl:text-5xl font-semibold leading-tight tracking-sharp">
            The Process
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
