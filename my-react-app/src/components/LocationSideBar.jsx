import React, { useState , useEffect } from "react";
import { locations } from "../../dataV2";
import SideBarBestTime from "./SideBarBestTime";
import SideBarInfoCard from "./SideBarInfoCard";
import SideBarLang from "./SideBarLang";
import SideBarGettingAround from "./SideBarGettingAround";
import SideBarWeather from "./SideBarWeather";
import SideBarCurrencyConverter from "./SideBarCurrencyConverter";
import SideBarCurrencyConverterTemp from "./SideBarCurrencyConverterTemp";


const LocationSideBar = () => {
  const [count, setCount] = useState(0);
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  const location = locations.find((item) => item.path === selectedId);

  console.log(location);
  return (
    <aside className="sidebar">
      <h3>Traveler's Guide</h3>
      <SideBarBestTime {...location} />
      <SideBarInfoCard {...location} />
      <SideBarLang {...location} />
      <SideBarGettingAround {...location} />
      <SideBarWeather {...location} />
      <SideBarCurrencyConverter {...location} />
      {/* <SideBarCurrencyConverterTemp {...location} /> */}
    </aside>
  );
};

export default LocationSideBar;
