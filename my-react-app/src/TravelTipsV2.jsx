import React, { useState } from "react";
import { DataContext } from "./ContentData";
import NavBar from "./components/NavBarV2";
import Hero from "./components/SubHero";
import TravelTipsCard from "./components/TravelTipsCard";
import TravelTipsSuggest from "./components/TravelTipsSuggest";
import Footer from "./components/Footer";
import * as allData from "../dataV2";

function TravelTips() {
  const [data] = useState(allData);
  const currentPath = window.location.pathname;
  // console.log(currentPath);

  const currentHero = data.heroData.find((loc) => loc.path === currentPath);

  const tipscards = data.traveltipscards;

  const checklists = data.traveltipschecklist;

  const contextValue = {
    allData: data, // 所有數據
    subHero: currentHero,
    tipscard: tipscards,
    checklist: checklists,
  };
  return (
    <React.Fragment>
      <NavBar />
      <DataContext.Provider value={contextValue}>
        <div className="page theme-tips">
          <Hero />
          <TravelTipsCard />
          <TravelTipsSuggest />
        </div>
        {/* <Footer /> */}
      </DataContext.Provider>
    </React.Fragment>
  );
}

export default TravelTips;
