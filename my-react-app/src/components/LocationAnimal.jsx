import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";
const LocationAnimal = () => {
  const { location } = useContext(DataContext);
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
