import React from "react";
import Link from "next/link";
import arrow from "@/public/img/ctcArrow.svg";
import Image from "next/image";

const CtcBtn = ({ text,mailId , cName ,sName }) => {
  return (
    <>
      <Link href="mailto:" className={`group bg-foreground py-6 md:py-4 xl:py-8 px-12 md:px-7 xl:px-12 rounded-full inline-block hover:bg-background border border-foreground transition-all duration-300 ${cName}`}>
        <span className={`text-background group-hover:text-foreground text-xl md:text-xs xl:text-xl font-semibold tracking-[-0.2px] mr-2 ${sName}`}>
          {text}
        </span>
        <Image src={arrow} alt="icon" className="size-4 xl:size-5 inline-block group-hover:invert xl:-mt-1.5" />
      </Link>
    </>
  );
};

export default CtcBtn;
