import React from "react";
import { locationLocalTips } from "../../dataV2";
const LocationLocalTips = () => {
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  const filteredLocalTips = locationLocalTips.filter(
    (location) => location.path === selectedId,
  );
  //   console.log(filteredLocalTips);
  return (
    <section className="local-tips">
      <h2>Local Insights</h2>
      <div className="tips-grid">
        {filteredLocalTips.map((location) => (
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
