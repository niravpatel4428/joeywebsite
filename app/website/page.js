import React from "react";
import Hero from "../pages/website/hero";
import Testimonials from "../components/testimonials";
import Counters from "../components/counters";
import Faq from "../components/faq";
import Choice from "../components/choice";
import Recent from "../pages/website/recent";

const Website = () => {
  return (
    <>
      <Hero />
      <Testimonials
        title=""
        subdetail="What our clients say about working on branding project with us"
        description="“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”"
        authorName="Chris Ellington"
        authorRole="Product Lead,Gatha."
      />
      <Counters />
      <Faq />
      <Choice />
      <Recent />
    </>
  );
};

export default Website;
