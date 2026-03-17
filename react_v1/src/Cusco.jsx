import React, { useState } from "react";
import NavBar from "./components/NavBarV2";
import Hero from "./components/SubHero";
import LocationVideo from "./components/LocationVideo";
import LocationIntro from "./components/LocationIntro";
import LocationAnimal from "./components/LocationAnimal";
import LocationAttraction from "./components/LocationAttraction";
import LocationGallery from "./components/LocationGallery";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Country from "./components/CountryV2";
import Footer from "./components/Footer";
// import "./CSS/styleV2.css";

function Cusco() {
  const [count, setCount] = useState(0);
  return (
    <React.Fragment>
      <NavBar />
      <div className="page theme-cusco">
        <Hero />
        <div class="main-content">
          <LocationIntro />
          <LocationVideo />
          <LocationAnimal />
          <LocationAttraction />
          <LocationGallery />
        </div>
        {/* <Country /> */}
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Tours /> */}
      </div>
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default Cusco;
