import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrow from "@/public/img/blackArrow.svg";
import image1 from "@/public/img/agents-card1.png";
import image2 from "@/public/img/agents-card2.png";
import AgentCard from "@/app/components/agentCard";
const agentCards = [
  {
    image: image1,
    title: "Crtly",
    subtitle: "Mobile App",
    href: "/",
  },
  {
    image: image2,
    title: "Tansto",
    subtitle: "Web Design",
    href: "/",
  },
];

const Recent = () => {
  return (
    <section className="relative pt-10 md:pt-7 lg:pt-12 xl:pt-16">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="mb-12">
          <div className="flex justify-between gap-10">
            <h6 className="text-foreground text-32 font-semibold leading-tight tracking-low">
              Recent Projects
            </h6>
            <div className="flex justify-center">
              <Link href="/" className="inline-flex items-center gap-2 group">
                <span className="text-foreground text-xl font-medium leading-none -tracking-low group-hover:underline transition-all duration-300">
                  More
                </span>
                <Image src={arrow} alt="icon" className="w-3" />
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
    </section>
  );
};

export default Recent;
