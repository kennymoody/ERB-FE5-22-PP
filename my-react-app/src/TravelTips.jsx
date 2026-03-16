import React, { useState } from "react";
import NavBar from "./components/NavBarV2";
import Hero from "./components/SubHero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Country from "./components/CountryV2";
import Footer from "./components/Footer";
// import "./CSS/styleV2.css";

function TravelTips() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <NavBar />
      <div className="page theme-traveltips">
        <Hero />
        {/* <Country /> */}
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Tours /> */}
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default TravelTips;
