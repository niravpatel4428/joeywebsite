import React from "react";
import Hero from "../pages/website/hero";
import Counters from "../components/counters";
import Faq from "../components/faq";
import Choice from "../components/choice";
import Recent from "../pages/website/recent";

const Website = () => {
  return (
    <>
      <Hero />
      <Counters />
      <Faq />
      <Choice />
      <Recent />
    </>
  );
};

export default Website;
