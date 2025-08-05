import React from "react";
import Testimonials from "../components/testimonials";
import Projects from "../pages/agents/projects";

const Agents = () => {
  return (
    <>
      <Projects />
      <Testimonials
        title="What Our Clients Say"
        description="“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”"
        authorName="Chris Ellington"
        authorRole="Product Lead,Gatha."
      />
    </>
  );
};

export default Agents;
