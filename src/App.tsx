import "./App.css";
import Section1 from "./components/section1/section1";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Element } from "react-scroll";
import Pricing from "./components/pricing/pricing";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Element id="Home" name="Home">
        <Section1 />
      </Element>
      <Element id="About" name="About">
        <Section1 />
      </Element>
      <Element id="Contact" name="Contact">
        <Section1 />
      </Element>
      <Element id="Pricing" name="Pricing">
        <Pricing />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
