import React, { createContext, useState } from "react";
import { DataContext } from "./ContentData";
import NavBar from "./components/NavBarV2";
import Hero from "./components/SubHero";
import LocationVideo from "./components/LocationVideoV2";
import LocationIntro from "./components/LocationIntroV2";
import LocationAnimal from "./components/LocationAnimal";
import LocationAttraction from "./components/LocationAttraction";
import LocationGallery from "./components/LocationGalleryV2";
import LocationLocalTips from "./components/LocationLocalTips";
import LocationMap from "./components/LocationMap";
import LocationSideBar from "./components/LocationSideBar";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Country from "./components/CountryV2";
import Footer from "./components/Footer";
import * as allData from "../dataV2";

function Cairo() {
  const [data] = useState(allData);
  const currentPath = window.location.pathname;

  const currentLocation = data.locations.find(
    (loc) => loc.path === currentPath,
  );
  const currentGallery = data.locationGallery.filter(
    (img) => img.path === currentPath,
  );
  const currentHero = data.heroData.find((loc) => loc.path === currentPath);
  // console.log(currentHero);

  const contextValue = {
    allData: data, // 所有數據
    location: currentLocation, // 當前地點的詳細資料 (intro, video, animal...)
    gallery: currentGallery, // 當前地點的相簿
    subHero: currentHero,
  };
  return (
    <React.Fragment>
      <NavBar />
      <DataContext.Provider value={contextValue}>
        <div className="page theme-cairo">
          <Hero />
          <div className="container">
            <div className="main-content">
              <LocationVideo />
              <LocationIntro />
              <LocationAnimal />
              <LocationAttraction />
              <LocationGallery />
              <LocationLocalTips />
              <LocationMap />
            </div>
            <LocationSideBar />
            {/* <Country /> */}
            {/* <About /> */}
            {/* <Services /> */}
            {/* <Tours /> */}
          </div>
        </div>
        {/* <Footer /> */}
      </DataContext.Provider>
    </React.Fragment>
  );
}

export default Cairo;
