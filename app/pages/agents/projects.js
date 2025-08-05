import React from "react";
import arrow from "@/public/img/blackArrow.svg";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/public/img/agents-card1.png";
import image2 from "@/public/img/agents-card2.png";
import image3 from "@/public/img/agents-card3.png";
import image4 from "@/public/img/agents-card4.png";
import image5 from "@/public/img/agents-card5.png";
import image6 from "@/public/img/agents-card6.png";
import AgentCard from "@/app/components/agentCard";

const agentCards = [
  {
    image: image1,
    title: "Crtly",
    subtitle: "Mobile App",
    href: "/agent-detail",
  },
  {
    image: image2,
    title: "Tansto",
    subtitle: "Web Design",
    href: "/agent-detail",
  },
  {
    image: image3,
    title: "Senta",
    subtitle: "Mobile App & Branding",
    href: "/agent-detail",
  },
  {
    image: image4,
    title: "Crint",
    subtitle: "Mobile App",
    href: "/agent-detail",
  },
  {
    image: image5,
    title: "Spanty",
    subtitle: "Branding",
    href: "/agent-detail",
  },
  {
    image: image6,
    title: "Spanty",
    subtitle: "Website",
    href: "/agent-detail",
  },
];

const Projects = () => {
  return (
    <section className="relative pt-8 md:pt-12 lg:pt-36 xl:pt-44">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        {/* title block */}
        <div className="pb-10 md:pb-8 border-b border-[#EFEFEF]">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 lg:col-span-6">
              <div className="flex flex-row justify-between items-center gap-5">
                <h1 className="text-foreground text-32 lg:text-5xl xl:text-64 font-semibold tracking-medium">
                  Agents
                </h1>

                <div className="block md:hidden">
                  <Link href="/" className="inline-flex gap-2 group">
                    <span className="text-foreground text-base font-medium leading-none -tracking-low group-hover:underline transition-all duration-300">
                      More
                    </span>
                    <Image src={arrow} alt="icon" className="w-3" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-6">
              <div className="">
                <p className="text-foreground text-base lg:text-lg xl:text-xl font-medium tracking-low">
                  I&apos;m dedicated to assisting individuals and companies in
                  crafting memorable online interactions, utilizing my skills in
                  user experience, Webflow, and internet marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* cards blocks */}
        <div className="pt-10 md:pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-8 gap-y-12">
            {agentCards.map((card, index) => (
              <AgentCard
                key={index}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                href={card.href}
              />
            ))}
          </div>
        </div>
        {/* btn */}
        <div className="mt-10 md:mt-12 xl:mt-16 block">
          <Link
            href="/"
            className="w-fit block mx-auto text-foreground text-xl font-semibold tracking-low !leading-none py-6 px-20 rounded-full bg-[#F9F9F9] hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Load More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
