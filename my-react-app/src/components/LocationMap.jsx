import React from "react";
import { locations } from "../../dataV2";
const LocationMap = () => {
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  const location = locations.find((item) => item.path === selectedId);
  return (
    <section>
      <h2>Location Map</h2>
      <div className="map-container">
        <iframe
          src={location.maplink}
          width="100%"
          height="100%"
          style={{border: "0"}}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
