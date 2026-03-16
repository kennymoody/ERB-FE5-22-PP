import React from "react";

const SideBarLang = ({lang}) => {
  return (
    <div className="info-item">
      <label>Language</label>
      <span>{lang}</span>
    </div>
  );
};

export default SideBarLang;
