import React, { useState } from "react";
import NavBar from "./components/NavBarV2";
import Hero from "./components/HeroV2";
import Country from "./components/CountryV2";
import Slide from "./components/Slide";
import FooterContent from "./components/FooterContent";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <NavBar />
      <div className="page">
        <Hero />
        <Country />
        <Slide />
      </div>
      <FooterContent />
      <Footer />
    </React.Fragment>
  );
}

export default App;
