import { locations } from "../../dataV2";
import SideBarBestTime from "./SideBarBestTime";
import SideBarInfoCard from "./SideBarInfoCard";
import SideBarLang from "./SideBarLang";
import SideBarGettingAround from "./SideBarGettingAround";
import SideBarWeather from "./SideBarWeather";
import SideBarCurrencyConverter from "./SideBarCurrencyConverter";

const LocationSideBar = () => {
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  const location = locations.find((item) => item.path === selectedId);

  // console.log(location);
  return (
    <aside className="sidebar">
      <h3>Traveler's Guide</h3>
      <SideBarBestTime {...location} />
      <SideBarLang {...location} />
      <SideBarGettingAround {...location} />
      <SideBarInfoCard {...location} />
      <SideBarWeather {...location} />
      <SideBarCurrencyConverter {...location} />
    </aside>
  );
};

export default LocationSideBar;
