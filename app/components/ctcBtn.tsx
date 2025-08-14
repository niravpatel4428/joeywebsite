import React, { FC } from "react";
import Link from "next/link";

interface CtcBtnProps {
  text: string;
  cName?: string; // Optional extra class for Link
  sName?: string; // Optional extra class for span
  hrefLink: string;
}

const CtcBtn: FC<CtcBtnProps> = ({ text, cName = "", hrefLink, sName = "" }) => {
  return (
    <Link
      href={hrefLink}
      className={`group bg-foreground py-6 md:py-4 xl:py-8 px-12 md:px-7 xl:px-12 rounded-full inline-block hover:bg-background border border-foreground transition-all duration-300 ${cName}`}
    >
      <span
        className={`text-background group-hover:text-foreground text-xl md:text-xs xl:text-xl font-semibold tracking-[-0.2px] mr-2 ${sName}`}
      >
        {text}
      </span>
    </Link>
  );
};

export default CtcBtn;
