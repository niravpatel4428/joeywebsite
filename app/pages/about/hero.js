"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/img/blackArrow.svg";
import joeyImg from "@/public/img/joeyImg.png";
import CtcBtn from "@/app/components/ctcBtn";
const Hero = () => {
  return (
    <section className="relative pt-10 pb-8 md:pb-10 lg:pb-14">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        {/* title box */}
        <div className="flex ">
          <div className="w-full max-w-[860px] -mr-16 sm:pt-6 md:pt-20 lg:pt-0">
            <h1 className="relative z-10 text-foreground text-5xl sm:text-7xl md:text-[92px] lg:text-[125px] xl:text-[160px] font-semibold !leading-snug tracking-[-0.84px] lg:tracking-[-4.54px]">
              Hey, <br />
              I&apos;m Alti
            </h1>
            <div className="block md:hidden mt-8">
              <CtcBtn
                text="Start building"
                hrefLink="/"
                cName="!py-2 !px-3"
                sName="!text-sm"
              />
            </div>
          </div>

          <div className="w-full max-w-[47%] sm:max-w-72 lg:max-w-96 xl:max-w-[473px] flex flex-col items-center gap-10">
            <div className="-mt-10 lg:-mt-20">
              <Image
                src={joeyImg}
                alt="image-1"
                className="rounded-2xl md:rounded-3xl lg:rounded-[64px]"
              />
            </div>

            <div className="hidden lg:block">
              <Link
                href="mailto:hello@joey.co"
                className="bg-grayLight rounded-full p-2 sm:p-4 md:p-8 lg:px-12 inline-flex flex-row gap-2 group hover:bg-foreground transition-all duration-300"
              >
                <span className="text-sm sm:text-base md:text-xl font-semibold leading-140 -tracking-low group-hover:text-background">
                  hello@joey.co
                </span>
                <Image
                  src={arrow}
                  alt="icon"
                  className="-rotate-45 w-[13px] group-hover:invert"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* descrition */}
        <div className="max-lg:mt-6 lg:-mt-32 xl:-mt-48">
          <div className="flex flex-col gap-10 w-full lg:max-w-xl xl:max-w-[700px]">
            <p className="text-foreground text-base sm:text-xl font-medium leading-140 tracking-low">
              Embarking on a journey of growth and education, I&apos;ve spent 9
              years collaborating remotely alongside innovative individuals from
              agencies, startups, and small companies on myriad design ventures.
            </p>

            <p className="text-foreground text-base sm:text-xl font-medium leading-140 tracking-low">
              My mastery of design and marketing stems from an array of online
              courses and tools, such as Thefutur, Mizko, Flux Academy, and
              Sabri Suby, equipping me with the expertise and abilities to excel
              in the field. In my leisure time, I relish tackling personal
              projects and immersing myself in design-centric materials.{" "}
            </p>

            <p className="text-foreground text-base sm:text-xl font-medium leading-140 tracking-low">
              Additionally, I am a dedicated video game enthusiast and find that
              a musical blend of hip-hop and jazz aids in maintaining
              productivity and concentration during work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
