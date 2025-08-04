import React from "react";
import collabrate from "@/public/img/collabrate.svg";
import Image from "next/image";

export const features = [
  {
    icon: collabrate,
    title: "Client-Centric",
    description:
      "Your goals are our focus. We listen, understand, and work closely with you to achieve your vision.",
  },
  {
    icon: collabrate,
    title: "Tailored Solutions",
    description:
      "We don't do one-size-fits-all. We craft solutions that are unique to your business, ensuring you stand out in your industry.",
  },
  {
    icon: collabrate,
    title: "Creative Innovation",
    description:
      "We stay ahead of design and branding trends to offer fresh and innovative ideas that set you apart.",
  },
];

const Collaborate = () => {
  return (
    <section className="relative pt-5 pb-7 md:pt-3 md:pb-10 xl:pt-16 xl:pb-28">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="mb-10 lg:mb-14 xl:mb-16">
          <h2 className="text-foreground text-32 sm:text-5xl md:text-84 font-semibold leading-tight tracking-[-0.84px]">
            Why Collaborate <br />
            with me?
          </h2>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 xl:gap-x-32 gap-y-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="flex flex-col gap-[10px]">
                  <div className="bg-foreground size-[60px] rounded-full flex justify-center items-center">
                    <Image src={feature.icon} alt="icon" className="w-6" />
                  </div>
                  <h3 className="text-foreground text-xl font-semibold leading-140 tracking-low">
                    {feature.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-foreground text-xl font-medium leading-140 tracking-low">
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
