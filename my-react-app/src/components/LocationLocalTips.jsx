import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";
const LocationLocalTips = () => {
  const { locationInsight } = useContext(DataContext);
  //   console.log(filteredLocalTips);
  return (
    <section className="local-tips">
      <h2>Local Insights</h2>
      <div className="tips-grid">
        {locationInsight.map((location) => (
          <div className="tip-item" key={location.id}>
            <h4>{location.title}</h4>
            <p>{location.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationLocalTips;
