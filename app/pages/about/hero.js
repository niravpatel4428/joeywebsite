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
              We believe the future of AI lies not in centralized control, but
              in democratized access to powerful, specialized agents. Founded on
              the principle that every developer should have enterprise grade AI
              agent capabilities at their fingertips, we&apos;ve built the
              world&apos;s most secure private cloud platform dedicated
              exclusively to AI agents. We take the best open source AI agents,
              optimize them for production workloads, and deliver them through
              simple API integrations that scale from startup experiments to
              mission critical enterprise applications
            </p>

            <p className="text-foreground text-base sm:text-xl font-medium leading-140 tracking-low">
              Our platform transforms how businesses deploy AI by eliminating
              the complexity, cost, and security risks of self hosting
              infrastructure. Each agent in our curated collection runs within
              its own isolated environment, protected by zero-trust architecture
              and comprehensive threat intelligence systems. From advanced
              network segmentation to air-gapped backup systems, we&apos;ve
              engineered every layer of our infrastructure to meet the most
              demanding security requirements while maintaining the performance
              and reliability that modern applications demand.
            </p>

            <p className="text-foreground text-base sm:text-xl font-medium leading-140 tracking-low">
              What sets us apart isn&apos;t just our technology, but our commitment
              to the open source AI ecosystem. By partnering with leading AI
              researchers and developers, we ensure our platform stays at the
              cutting edge of AI innovation while providing the enterprise grade
              security, monitoring, and support that production applications
              require. Whether you&apos;re building the next breakthrough application
              or scaling an existing product, our platform gives you the power
              of specialized AI agents without the operational overhead, backed
              by SOC 2 certified infrastructure and 24/7 monitoring that never
              sleeps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
