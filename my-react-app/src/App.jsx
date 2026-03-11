import React, { useState } from "react";
import NavBar from "./components/NavBarV2";
import Hero from "./components/HeroV2";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Country from "./components/CountryV2";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
        <NavBar />
        <Hero />
        <Country />
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Tours /> */}
        {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
