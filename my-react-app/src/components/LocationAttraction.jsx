import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";
import LocationAttractionCard from "./LocationAttractionCard";
const LocationAttraction = () => {
  const { locationCard } = useContext(DataContext);
  if (!locationCard || locationCard.length === 0) return null;
  return (
    <section className="locationAttr">
      <h2>Must-Visit Attractions</h2>
      <div className="attractions">
        {locationCard.map((locationattr) => {
          return (
            <LocationAttractionCard key={locationattr.id} {...locationattr} />
          );
        })}
      </div>
    </section>
  );
};

export default LocationAttraction;
