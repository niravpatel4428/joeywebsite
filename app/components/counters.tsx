import React from "react";

const Counters = () => {
  return (
    <section className="relative mt-12 mb-5 md:mt-16 xl:mt-20 md:mb-3 xl:mb-20">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="w-full max-w-[800px] mx-auto">
          <div className="flex max-sm:flex-col flex-row justify-between gap-6 sm:gap-14 md:gap-24 lg:gap-28 xl:gap-36">
            <div className="flex flex-col gap-3">
              <span className="text-foreground text-32 sm:text-3xl md:text-5xl lg:text-6xl xl:text-64 font-semibold !leading-110 tracking-medium">
                15+
              </span>
              <p className="text-foreground text-xl font-medium leading-140 tracking-low">
                Launched Brands
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground text-32 sm:text-3xl md:text-5xl lg:text-6xl xl:text-64 font-semibold !leading-110 tracking-medium">
                50M+
              </span>
              <p className="text-foreground text-xl font-medium leading-140 tracking-low">
                Views Per Month
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground text-32 sm:text-3xl md:text-5xl lg:text-6xl xl:text-64 font-semibold !leading-110 tracking-medium">
                4+
              </span>
              <p className="text-foreground text-xl font-medium leading-140 tracking-low">
                Brand Experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;
