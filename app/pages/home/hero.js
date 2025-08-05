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
        <div className="relative">
          <h1 className="text-foreground text-5xl sm:text-7xl md:text-[95px] lg:text-[123px] xl:text-[160px] font-semibold leading-none tracking-[-4.54px] max-md:text-center">
            Private Cloud for AI Agents API
          </h1>

          <div className="relative max-lg:mt-4 max-lg:flex max-lg:justify-end lg:absolute bottom-1 lg:bottom-3 xl:bottom-4 right-0  lg:-right-3 xl:-right-3">
            <button
              onClick={handleScroll}
              className="bg-grayLight rounded-full p-2 sm:p-4 md:p-6 xl:p-8 inline-flex flex-row gap-2 group hover:bg-foreground transition-all duration-300"
            >
              <span className="uppercase text-sm sm:text-base md:text-lg lg:text-xl font-semibold leading-140 -tracking-low group-hover:text-background">
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
      </div>
    </section>
  );
};

export default Hero;
