import "./App.css";
import Section1 from "./components/section1/section1";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Element } from "react-scroll";
import Pricing from "./components/pricing/pricing";
import Section2 from "./components/section2/section2";
import Section3 from "./components/section3/section3";
import Section4 from "./components/section4/section4";
import ScrollToTopButton from "./components/button/scrollToTopButton";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Element id="Home" name="Home">
        <Section1 />
      </Element>
      <Element id="About" name="About">
        <Section2 />
      </Element>
      <Element id="Contact" name="Contact">
        <Section3 />
      </Element>
      <Element id="Feature" name="Feature">
        <Section4 />
      </Element>
      <Element id="Pricing" name="Pricing">
        <Pricing />
      </Element>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
