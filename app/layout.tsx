import type { Metadata } from "next";
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import { spaceGroteskFont } from "./lib/fonts";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Alti Cloud",
  description: "Agent Layer Task Intelligence",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={spaceGroteskFont.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
