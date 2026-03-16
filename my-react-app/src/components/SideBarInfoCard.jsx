import React from "react";

const SideBarInfoCard = ({ voltage, plug, plugimgsrc, avgtemp, currency }) => {
  return (
    <div className="enriched-info-grid">
      <div className="info-card">
        <label>Voltage</label>
        <span>{voltage}</span>
      </div>
      <div className="info-card">
        <label>Plug Type</label>
        <img src={plugimgsrc} className="plug-icon" />
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
