"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import altiBlack from "@/public/img/altiBlack.png";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Agents", href: "/agents" },
  { label: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [show, setShow] = useState<boolean>(false);

  const handleShow = (): void => {
    setShow((prev) => !prev);
  };

  return (
    <div className="relative py-4 sm:pt-8">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="flex flex-row max-sm:justify-between sm:flex-col justify-center items-center gap-10">
          <Link href="/" className="w-fit block">
            <Image src={altiBlack} alt="icon" className="w-24" />
          </Link>

          {/* toggle btn */}
          <div className="block sm:hidden">
            <button
              onClick={handleShow}
              className="relative bg-foreground rounded-full p-2 size-10 flex flex-col justify-center items-center gap-1"
            >
              <span
                className={`w-5 h-[2px] block bg-background rounded-[1px] transition-all duration-300 ${
                  show ? "rotate-45 absolute top-5" : ""
                }`}
              ></span>
              <span
                className={`w-5 h-[2px] block bg-background rounded-[1px] ${
                  show ? "opacity-0" : ""
                } transition-all duration-300`}
              ></span>
              <span
                className={`w-5 h-[2px] block bg-background rounded-[1px] ${
                  show ? "-rotate-45 absolute bottom-[18px]" : ""
                }  transition-all duration-300`}
              ></span>
            </button>
          </div>

          {/* contents */}
          <div
            className={`${
              show ? "block" : "max-sm:hidden"
            }  max-sm:fixed max-sm:top-[72px] max-sm:right-0 max-sm:left-0 max-sm:w-full sm:w-fit z-50`}
          >
            <div className="bg-foreground sm:w-fit sm:rounded-full shadow-custom p-5 sm:p-[5px]">
              <ul className="flex flex-col sm:flex-row items-center gap-4">
                {navItems.map((item, index) => (
                  <li onClick={handleShow} key={index} className="flex">
                    <Link
                      href={item.href}
                      className={`${
                        pathname === item.href
                          ? "text-foreground bg-background"
                          : ""
                      } p-4 rounded-48 text-[#C4C4C4] text-xl font-medium leading-none tracking-low flex items-center gap-1 hover:text-foreground hover:bg-background transition-all duration-300`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
