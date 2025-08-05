import Link from "next/link";
import React from "react";
import brandingMain from "@/public/img/brandingMain.png";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative mt-8 md:mt-16 lg:mt-20">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        {/* breadcrum */}
        <div className="mb-10">
          <ul className="flex flex-row py-1">
            <li>
              <Link
                href="/"
                className="block text-[#6C6C6C] text-sm font-semibold leading-140 tracking-thinest relative after:absolute after:content-[''] pr-7 after:h-3 after:w-3 after:bg-contain after:bg-no-repeat after:bg-arrowBlack after:right-2 after:top-1/2 after:-translate-y-1/2"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block text-foreground text-sm font-semibold leading-140 tracking-thinest relative"
              >
                Websites
              </Link>
            </li>
          </ul>
        </div>

        {/* title */}
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <div className="mb-7">
              <h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-64 font-semibold !leading-110 tracking-medium">
                Go by one dresscode; wear your heart on your sleeve
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
                As emerging sectors arise and current ones become saturated,
                you&apos;ll need to differentiate yourself. Enter &apos;branding&apos;. We
                assist you in developing a memorable brand. One that shares your
                narrative. One that establishes expectations. One that fosters
                connections with your audience and maintains them robustly.
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="w-full h-full my-10">
          <Image
            src={brandingMain}
            alt="banner-image"
            className="w-full h-full rounded-2xl md:rounded-32 xl:rounded-40"
          />
        </div>

        {/* content */}
        <div className="flex flex-col gap-7">
          <p className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
            First, let&apos;s tackle the elephant in the room: what is &apos;brand&apos;? In a
            nutshell, your brand represents how people perceive and feel about
            you. Maybe you haven&apos;t considered your business as a brand, or
            perhaps you did, but it vanished amidst growing your team and
            developing your product.
          </p>

          <p className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
            Whatever the situation, our branding team is here for you. We begin
            by addressing the tough questions that truly matter. During a Brand
            Sprint, we align your team with your vision and mission, seeking out
            what sets your business apart and converting our findings into a
            brand concept - a unique fusion of a metaphorical theme and elements
            such as color, typeface, shape, tone of voice, topped off with a
            logo.
          </p>

          <p className="text-foreground text-sm md:text-base xl:text-xl font-medium leading-140 tracking-low">
            The only thing we&apos;ll require from you is to reveal your genuine
            colors. You see, we believe no one should have to feign being
            something they&apos;re not. Your (potential) audience can see right
            through it. Fortunately for us, they can also recognize an authentic
            brand. We assist you in discovering the right words and provide you
            with a microphone to amplify your brand message.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
