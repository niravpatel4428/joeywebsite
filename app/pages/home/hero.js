"use client";
import React from "react";
import Link from "next/link";
import arrow from "@/public/img/blackArrow.svg";
import Image from "next/image";
import { useCallback } from "react";
const Hero = () => {
  const handleScroll = useCallback(() => {
    const section = document.getElementById("agents");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section className="relative pb-4 md:pb-10 xl:pb-14 pt-14 xl:pt-12">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="relative mb-16">
          <h1 className="text-foreground text-5xl sm:text-7xl md:text-[84px] lg:text-[180px] xl:text-[227px] font-semibold leading-none tracking-[-4.54px] max-md:text-center">
            Websites& <br /> Branding
          </h1>

          <div className="relative max-md:mt-4 max-md:flex max-md:justify-end md:absolute bottom-1 lg:bottom-7 xl:bottom-10 right-0 xl:-right-3">
            <button
              onClick={handleScroll}
              className="bg-[#F9F9F9] rounded-full p-2 sm:p-4 md:p-8 inline-flex flex-row gap-2 group hover:bg-foreground transition-all duration-300"
            >
              <span className="uppercase text-sm sm:text-base md:text-xl font-semibold leading-140 -tracking-low group-hover:text-background">
                SCROLL DOWN
              </span>
              <Image
                src={arrow}
                alt="icon"
                className="rotate-90 w-[13px] group-hover:invert"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-5 lg:col-span-7">
            <div className="">
              <p className="text-fore text-xl xl:text-2xl font-semibold leading-tight tracking-low mb-2">
                Let’s Talk
              </p>
              <Link
                href="mailto:hello@joey.co"
                className="text-foreground text-sm xl:text-xl font-medium leading-140 tracking-low"
              >
                hello@joey.co
              </Link>
            </div>
          </div>
          <div className="col-span-7 lg:col-span-5">
            <div className="hidden lg:block">
              <p className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
                Hello, I'm Joey, an online product designer focusing on brand
                identity, advertising, and no-code instruments.
              </p>
            </div>
            <div className="block lg:hidden">
              <p className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
                Hey there, I'm Joey, a digital product designer specializing in
                branding, marketing, and no-code tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
