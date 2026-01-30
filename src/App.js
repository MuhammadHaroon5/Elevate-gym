import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Pricing from "./Components/Pricing";
import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden overflow-y-auto bg-black/80">
      <Navbar />
      <Home />
      <Services />
      <About />
      <Pricing />
      <Reviews /> 
      <Footer />
    </div>
  );
}

export default App;
