import Image from "next/image";
import Link from "next/link";
import React from "react";
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

const Agents = () => {
  return (
    <section id="agents" className="relative pt-8 pb-12 md:py-10 xl:py-20">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        {/* title and description */}
        <div className="relative flex justify-between items-end mb-12 xl:mb-10">
          <div className="w-full max-w-sm">
            <div className="mb-4 sm:mb-3 max-sm:pr-24">
              <h3 className="text-foreground text-2xl md:text-32 xl:text-5xl font-semibold leading-tight tracking-sharp">
                Agents
              </h3>
            </div>
            <p className="text-foreground text-sm sm:text-base xl:text-xl font-medium leading-140 -tracking-low">
              As a seasoned creator of contemporary, user-friendly web designs
              and digital solutions, I aim to assist you in constructing the
              brand of your fantasies.
            </p>
          </div>

          <div className="absolute top-2 right-0 sm:relative">
            <Link href="/" className="inline-flex gap-2 group">
              <span className="text-foreground text-xl font-medium leading-none -tracking-low group-hover:underline transition-all duration-300">
                More
              </span>
              <Image src={arrow} alt="icon" className="w-3" />
            </Link>
          </div>
        </div>

        {/* cards block */}
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
    </section>
  );
};

export default Agents;
