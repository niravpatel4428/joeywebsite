import Testimonials from "./components/testimonials";
import BigText from "./pages/home/bigText";
import Experties from "./pages/home/experties";
import Agents from "./pages/home/agents";
import Hero from "./pages/home/hero";
import type React = require("react");

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Agents />
      <Experties />
      <BigText />
      {/* <Testimonials
        title="What Our Clients Say"
        description="“Joey is a remarkable artist. He grasps abstract ideas and transforms them into exceptional visuals. Throughout the years, I've witnessed him produce everything from small symbols to comprehensive adaptive web pages. He has crafted clothing items like tees and caps, promotional products, and professional literature.”"
        authorName="Chris Ellington"
        authorRole="Product Lead,Gatha."
      /> */}
    </>
  );
};

export default Home;
