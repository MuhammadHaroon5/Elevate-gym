import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";
import IdBOX from "./Components/IdBOX";

function App() {
  return (
    <>
      <div className="container-fluid myBg">
        {/* <div className="container" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabindex="0"> */}
        <div className="container">
          <Navbar />
          <IdBOX id="Home" class="no1" />
          <Home />
          <IdBOX id="Services" class="no2" />
          <Services />
          <IdBOX id="About" class="no3" />
          <About />
          <IdBOX id="Pricing" class="no4" />
          <Pricing />
          <IdBOX id="Reviews" class="no5" />
          <Reviews />
        </div>
        <div className="container-fluid bg-dark py-4">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
