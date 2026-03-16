import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";

const LocationIntro = () => {
  const { location } = useContext(DataContext);
  // console.log(location);
  if (!location) return null;
  return (
    <section>
      <h2>{location.introh1}</h2>
      <p>{location.introp}</p>
    </section>
  );
};

export default LocationIntro;
