import React, { useState } from "react";
import { DataContext } from "./ContentData";
import NavBar from "./components/NavBarV2";
import Hero from "./components/SubHero";
import LocationVideo from "./components/LocationVideoV2";
import LocationIntro from "./components/LocationIntroV2";
import LocationAnimal from "./components/LocationAnimal";
import LocationAttraction from "./components/LocationAttraction";
import LocationGallery from "./components/LocationGalleryV2";
import LocationLocalInsights from "./components/LocationLocalInsights";
import LocationMap from "./components/LocationMap";
import LocationSideBar from "./components/LocationSideBar";
import FooterContent from "./components/FooterContent";
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
  const currentLocationCard = data.locationAttractionCards.filter(
    (loc) => loc.path === currentPath,
  );
  const currentlocationInsight = data.locationInsights.filter(
    (loc) => loc.path === currentPath,
  );

  const contextValue = {
    allData: data,
    location: currentLocation,
    gallery: currentGallery,
    subHero: currentHero,
    locationCard: currentLocationCard,
    locationInsight: currentlocationInsight,
  };
  return (
    <React.Fragment>
      <div className="theme-cairo">
      <NavBar />
</div>
      <DataContext.Provider value={contextValue}>
        <div className="page theme-cairo">
          <Hero />
          <div className="container">
            <div className="main-content">
              <LocationIntro />
              <LocationVideo />
              <LocationAttraction />
              <LocationGallery />
              <LocationAnimal />
              <LocationLocalInsights />
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

export default Cairo;
