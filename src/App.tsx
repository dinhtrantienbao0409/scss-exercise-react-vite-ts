import "./App.css";
import Section1 from "./components/section1/section1";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section1 />
      <Section1 />
      <Section1 />
    </div>
  );
}

export default App;
