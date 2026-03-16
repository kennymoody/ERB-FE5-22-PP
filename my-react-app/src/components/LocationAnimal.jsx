import React from "react";
import { locations } from "../../dataV2";

const LocationAnimal = () => {
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  const location = locations.find((item) => item.path === selectedId);
  return (
    <section className="animal-section">
      <img src={location.animalimage} className="animal-image" />
      <div className="animal-info">
        <h3>{location.animaltitle}</h3>
        <p>{location.animalinfo}</p>
        <p>
          <strong>Where to find:</strong> {location.animalwhere}
        </p>
      </div>
    </section>
  );
};

export default LocationAnimal;
