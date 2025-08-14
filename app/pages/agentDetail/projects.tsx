import React from "react";
import image1 from "@/public/img/agents-card1.png";
import image2 from "@/public/img/agents-card2.png";
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
];

const Projects = () => {
  return (
    <section className="relative pt-8 md:pt-12 lg:pt-36 xl:pt-44">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        {/* title block */}
        <div className="pb-10 md:pb-10 xl:pb-14">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-4 lg:col-span-5">
              <div className="relative">
                <h1 className="text-foreground text-2xl md:text-32 font-semibold tracking-medium">
                  Challenge
                </h1>
              </div>
            </div>
            <div className="col-span-12 md:col-span-8 lg:col-span-7">
              <div className="">
                <p className="text-foreground text-base lg:text-lg xl:text-xl font-medium tracking-low">
                  A firm reached out for help in developing a fresh brand
                  identity and overhauling the website for Wellness House, a
                  location that facilitates a serene and healthy living
                  experience. My objective was to produce a unified visual style
                  that resonates with the core values of the wellness way of
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* cards blocks */}
        <div className="pb-6 md:pb-12 xl:pt-16">
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
      </div>
    </section>
  );
};

export default Projects;
