import Link from "next/link";
import React from "react";
import CtcBtn from "./ctcBtn";

const socialLinks = [
  { name: "Dribbble", href: "https://dribbble.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => {
  return (
    <footer className="relative mt-9 md:mt-24 xl:mt-32 pb-8 md:pb-10 xl:pb-12">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="flex flex-col gap-6 md:gap-20 xl:gap-36">
          <div className="flex flex-col justify-center text-center gap-12 md:gap-7 xl:gap-12">
            <div>
              <h6 className="text-foreground text-5xl md:text-79 xl:text-140 font-semibold tracking-thin leading-110">
                Let&apos;s build!
              </h6>
            </div>
            <div className="">
              <CtcBtn text="Start building" hrefLink="/" />
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
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-1 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
