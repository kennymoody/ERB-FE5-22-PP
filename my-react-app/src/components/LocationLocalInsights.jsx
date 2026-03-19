import React, { useContext } from "react";
import { DataContext } from "../ContentData";
const LocationLocalInsights = () => {
  const { locationInsight } = useContext(DataContext);
  //   console.log(filteredLocalTips);
  return (
    <section className="local-insights">
      <h2>Local Insights</h2>
      <div className="local-insights-grid">
        {locationInsight.map((location) => (
          <div className="local-insights-item" key={location.id}>
            <h4>{location.title}</h4>
            <p>{location.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationLocalInsights;
