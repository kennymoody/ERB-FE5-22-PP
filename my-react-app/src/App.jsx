import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Country from "./components/Country";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <div className="container" id="home">
        <NavBar />
        <Hero />
        <Country />
        {/* <About /> */}
        {/* <Services /> */}
        {/* <Tours /> */}
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
