import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";
const LocationMap = () => {
  const { location } = useContext(DataContext);
  return (
    <section>
      <h2>Location Map</h2>
      <div className="map-container">
        <iframe
          src={location.maplink}
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationMap;
