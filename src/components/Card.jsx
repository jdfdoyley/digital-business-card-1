import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import Interests from "./Interest";

function Card() {
  return (
    <div className="Card">
      <Hero />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default Card;
