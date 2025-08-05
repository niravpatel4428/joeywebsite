import React from "react";
import figma from "@/public/img/figma.svg";
import linear from "@/public/img/linear.svg";
import slack from "@/public/img/slack.svg";
import notion from "@/public/img/notion.svg";
import Image from "next/image";
const Choice = () => {
  return (
    <section className="relative mt-10 md:mt-7 xl:mt-16 mb-10 md:mb-7 lg:mb-12 xl:mb-16">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="mb-6 md:mb-8 xl:mb-10">
          <h5 className="text-foreground text-32 font-semibold tracking-low">
            Our tools of choice
          </h5>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-2xl bg-grayLight p-8 flex flex-row justify-center items-center gap-1">
            <Image src={figma} alt="icon" className="sizze-20" />
            <p>Figma</p>
          </div>
          <div className="rounded-2xl bg-grayLight p-8 flex flex-row justify-center items-center gap-1">
            <Image src={slack} alt="icon" className="sizze-20" />
            <p>Slack</p>
          </div>
          <div className="rounded-2xl bg-grayLight p-8 flex flex-row justify-center items-center gap-1">
            <Image src={linear} alt="icon" className="sizze-20" />
            <p>Linear</p>
          </div>
          <div className="rounded-2xl bg-grayLight p-8 flex flex-row justify-center items-center gap-1">
            <Image src={notion} alt="icon" className="sizze-20" />
            <p>Notion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choice;
