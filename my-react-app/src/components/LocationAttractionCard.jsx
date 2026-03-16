import React from "react";

const LocationAttractionCard = ({ imagesrc, title, info }) => {
  return (
    <>
      <div className="attr-card">
        <img src={imagesrc} />
        <div className="attr-card-body">
          <h4>{title}</h4>
          <p>{info}</p>
        </div>
      </div>
    </>
  );
};

export default LocationAttractionCard;
