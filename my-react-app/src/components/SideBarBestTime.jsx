import React from "react";

const SideBarBestTime = ({besttime}) => {
  return (
    <div className="info-item">
      <label>Best Time to Visit</label>
      <span>{besttime}</span>
    </div>
  );
};

export default SideBarBestTime;
