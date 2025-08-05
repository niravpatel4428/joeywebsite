import Image from "next/image";
import React from "react";
import spanty from "@/public/img/spanty.png";
import brandingMain from "@/public/img/brandingMain.png";
import agentsCard4 from "@/public/img/agents-card4.png";
import Link from "next/link";
import arrow from "@/public/img/blackArrow.svg";

const Culture = () => {
  return (
    <section className="relative mt-7 md:mt-10 lg:mt-16">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        {/* title block */}
        <div className="grid grid-cols-12 gap-4 md:gap-7 lg:gap-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-5">
            <div className="relative">
              <h3 className="text-foreground text-2xl md:text-32 xl:text-5xl font-semibold tracking-medium">
                A brand that fits with the company culture
              </h3>
            </div>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-7">
            <div className="flex flex-col justify-end gap-5 md:gap-7 xl:pl-20">
              <p className="text-foreground text-base lg:text-lg xl:text-xl font-medium tracking-low">
                Wholeness Haven is an organic sanctuary for individuals to
                relieve tension, restore, refresh, and revitalize their body,
                mind, & spirit.
              </p>
              <p className="text-foreground text-base lg:text-lg xl:text-xl font-medium tracking-low">
                My assignment involved devising a notion for a fresh emblem that
                embodies the firm&apos;s principles. I opted to merge a domicile
                silhouette with a lotus blossom to signify well-being, and a
                serif typeface to impart an air of expertise and opulence.
              </p>
            </div>
          </div>
        </div>

        {/* image block */}
        <div className="mt-10 md:mt-16 xl:mt-28">
          <Image
            src={spanty}
            alt="big-image"
            className="h-full w-full object-cover rounded-2xl md:rounded-32"
          />
        </div>
        <div className="mt-10 md:mt-16 xl:mt-28">
          <Image
            src={brandingMain}
            alt="big-image"
            className="h-full w-full object-cover rounded-2xl md:rounded-32"
          />
        </div>

        {/* description */}
        <div className="mt-10 md:mt-16 xl:mt-28">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-10">
              <div className="flex flex-col gap-8">
                <h4 className="text-foreground text-5xl font-semibold leading-tight">
                  Crafting a cohesive and consistent brand experience
                </h4>

                <div className="flex flex-col gap-7">
                  <p className="text-foreground text-base font-medium">
                    Wholeness Haven is an organic sanctuary for individuals to
                    relieve tension, restore, refresh, and revitalize their
                    body, mind, & spirit.
                  </p>
                  <p className="text-foreground text-base font-medium">
                    My assignment involved devising a notion for a fresh emblem
                    that embodies the firm&apos;s principles. I opted to merge a
                    domicile silhouette with a lotus blossom to signify
                    well-being, and a serif typeface to impart an air of
                    expertise and opulence.
                  </p>
                  <p className="text-foreground text-base font-medium">
                    For an organization such as Wellness House, prioritizing
                    well-being and professionalism is of utmost significance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* next prroject */}
        <div className="mt-10 sm:mt-20 md:mt-24 lg:mt-48 xl:mt-64">
          <div className="mb-6 md:mb-16">
            <h5 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-64 font-semibold !leading-110 tracking-medium">
              Next Project
            </h5>
          </div>

          <div className="grid grid-cols-12 gap-6 sm:gap-8">
            <div className="col-span-12 sm:col-span-3 lg:col-span-4 max-sm:hidden"></div>
            <div className="col-span-12 sm:col-span-6 lg:col-span-5">
                <div className="h-full w-full">
                    <Image src={agentsCard4} alt="image-1" className="object-cover h-full w-full rounded-2xl md:rounded-32" />
                </div>
            </div>
            <div className="col-span-12 sm:col-span-3 lg:col-span-3">
                <div className="h-full flex flex-col justify-center">
                    <p className="text-foreground text-xl font-bold leading-140">Crint</p>
                    <Link href="/" className="group flex items-center gap-1 hover:underline">
                        <span className="text-foreground text-xl font-medium leading-140">Branding</span>
                        <Image src={arrow} alt="arrow" className="w-3 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
