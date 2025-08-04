import Image from "next/image";
import Footer from "./components/footer";
import Testimonials from "./pages/home/testimonials";
import BigText from "./pages/home/bigText";
import Experties from "./pages/home/experties";
import Agents from "./pages/home/agents";
import Hero from "./pages/home/hero";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Hero />
      <Agents />
      <Experties />
      <BigText />
      <Testimonials />
    </>
  );
}
