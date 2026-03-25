import React from "react";
import PlugSlide from "./PlugSlide";

const SideBarInfoCard = ({ voltage, plug, plugimgsrc, avgtemp, currency }) => {
  return (
    <div className="info-card-grid">
      <div className="info-card">
        <label>Voltage</label>
        <span>{voltage}</span>
      </div>
      <div className="info-card">
        <label>Plug Type</label>
        {/* <img src={plugimgsrc} className="plug-icon" /> */}
        <PlugSlide />
        <span>{plug}</span>
      </div>
      <div className="info-card">
        <label>Avg Temp</label>
        <span>{avgtemp}</span>
      </div>
      <div className="info-card">
        <label>Currency</label>
        <span>{currency}</span>
      </div>
    </div>
  );
};

export default SideBarInfoCard;
