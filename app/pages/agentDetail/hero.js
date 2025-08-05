import Link from "next/link";
import React from "react";
import brandingMain from "@/public/img/brandingMain.png"
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
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block text-foreground text-sm font-semibold leading-140 tracking-thinest relative"
              >
                Branding
              </Link>
            </li>
          </ul>
        </div>

        {/* title */}
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <h1 className="text-foreground text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-64 font-semibold !leading-110 tracking-medium">
              <span className="block max-md:text-4xl max-sm:text-32">
                {" "}
                Tasto Impact —{" "}
              </span>
              A unified visual brand for a well-being retreat.
            </h1>
          </div>
        </div>

        {/* image */}
        <div className="w-full h-full mt-10">
            <Image src={brandingMain} alt="banner-image" className="w-full h-full rounded-2xl md:rounded-32 xl:rounded-40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
