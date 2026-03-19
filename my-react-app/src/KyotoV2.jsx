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

function Kyoto() {
  // Keep data by using useState
  const [data] = useState(allData);
  // Get current real path for data filtering
  const currentPath = window.location.pathname;

  // Filter data out from allData
  const currentLocation = data.locations.find(
    (loc) => loc.path === currentPath,
  );
  const currentLocationCard = data.locationAttractionCards.filter(
    (loc) => loc.path === currentPath,
  );

  const currentHero = data.heroData.find((loc) => loc.path === currentPath);

  const currentGallery = data.locationGallery.filter(
    (img) => img.path === currentPath,
  );

  const currentlocationInsight = data.locationInsights.filter(
    (loc) => loc.path === currentPath,
  );

  // Get specific data from Data Array
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
      <div className="theme-kyoto">
      <NavBar />
</div>
      <DataContext.Provider value={contextValue}>
        <div className="page theme-kyoto">
          <Hero />
          <div className="container">
            <div className="main-content">
              <LocationIntro />
              <LocationVideo />
              <LocationAnimal />
              <LocationAttraction />
              <LocationGallery />
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

export default Kyoto;
