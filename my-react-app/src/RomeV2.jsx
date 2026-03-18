import React, { useState } from "react";
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
import FooterContent from "./components/FooterContent";
import Footer from "./components/Footer";
import * as allData from "../dataV2";

function Rome() {
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
  const currentLocationCard = data.locationAttractionCards.filter(
    (loc) => loc.path === currentPath,
  );

  const contextValue = {
    allData: data,
    location: currentLocation,
    gallery: currentGallery,
    subHero: currentHero,
    locationCard: currentLocationCard,
  };

  return (
    <React.Fragment>
      <NavBar />
      <DataContext.Provider value={contextValue}>
        <div className="page theme-rome">
          <Hero />
          <div className="container">
            <div className="main-content">
              <LocationIntro />
              <LocationVideo />
              <LocationAnimal />
              <LocationAttraction />
              <LocationGallery />
              <LocationLocalTips />
              <LocationMap />
            </div>
            <LocationSideBar />
          </div>
        </div>
        <FooterContent />
        <Footer />
      </DataContext.Provider>
    </React.Fragment>
  );
}

export default Rome;
