"use client";
import React, { useState } from "react";
import logo from "@/public/img/logo.svg";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Agents",
    href: "/",
    badge: "20", // optional badge
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="relative py-4 sm:pt-8">
      <div className="w-full md:max-w-3xl lg:max-w-5xl xl:max-w-1296 px-4 md:px-10 mx-auto">
        <div className="flex flex-row max-sm:justify-between sm:flex-col justify-center items-center gap-10">
          <Link href="/" className="w-fit block">
            <Image src={logo} alt="icon" className="w-24" />
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
                {/* <li className="flex">
                  <Link
                    href="/"
                    className="p-4 rounded-[48px] text-[#C4C4C4] text-xl font-medium leading-none tracking-low hover:text-foreground hover:bg-background transition-all duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/"
                    className="p-4 rounded-[48px] text-[#C4C4C4] text-xl font-medium leading-none tracking-low flex items-center gap-1 hover:text-foreground hover:bg-background transition-all duration-300"
                  >
                    {" "}
                    <span className="bg-[#C4C4C4] rounded-full text-foreground text-[10px] p-1 leading-none min-w-5">
                      20
                    </span>{" "}
                    Agents
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/"
                    className="p-4 rounded-[48px] text-[#C4C4C4] text-xl font-medium leading-none tracking-low hover:text-foreground hover:bg-background transition-all duration-300"
                  >
                    About
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/"
                    className="p-4 rounded-[48px] text-[#C4C4C4] text-xl font-medium leading-none tracking-low hover:text-foreground hover:bg-background transition-all duration-300"
                  >
                    Contact
                  </Link>
                </li> */}
                {navItems.map((item, index) => (
                  <li key={index} className="flex">
                    <Link
                      href={item.href}
                      className="p-4 rounded-[48px] text-[#C4C4C4] text-xl font-medium leading-none tracking-low flex items-center gap-1 hover:text-foreground hover:bg-background transition-all duration-300"
                    >
                      {item.badge && (
                        <span className="bg-[#C4C4C4] rounded-full text-foreground text-[10px] p-1 leading-none min-w-5">
                          {item.badge}
                        </span>
                      )}
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
