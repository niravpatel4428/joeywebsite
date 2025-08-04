import Link from "next/link";
import React from "react";
import CtcBtn from "./ctcBtn";

const Footer = () => {
  return (
    <footer className="relative mt-9 md:mt-24 xl:mt-32 pb-8 md:pb-10 xl:pb-12">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="flex flex-col gap-6 md:gap-20 xl:gap-36">
          <div className="flex flex-col justify-center text-center gap-12 md:gap-7 xl:gap-12">
            <div>
              <h6 className="text-foreground text-5xl md:text-79 xl:text-140 font-semibold tracking-thin leading-110">
                Let’s talk!
              </h6>
            </div>
            <div className="">
              <CtcBtn text="hello@joey.co" mailId="hello@joey.co" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-6">
            <div>
              <p className="text-foreground text-sm font-medium tracking-thinest">
                2023 © — Made by Djectstudio
              </p>
            </div>
            <div>
              <ul className="flex sm:justify-end gap-10">
                <li>
                  <Link
                    href="/"
                    className="hover:underline underline-offset-1 transition-all duration-300"
                  >
                    Dribbble
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:underline underline-offset-1 transition-all duration-300"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="hover:underline underline-offset-1 transition-all duration-300"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
