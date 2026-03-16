import React from "react";

const SideBarWeather = () => {
  return (
    <div
      className="weather-widget"
      id="weatherWidget"
      data-lat="35.0116"
      data-lon="135.7681"
    >
      <div className="weather-header">
        <h4>Local Weather</h4>
        <span style={{ fontSize: "0.7rem", color: "var(--text-light)" }}>
          Kyoto, JP
        </span>
      </div>
      <div className="current-weather">
        <span className="weather-icon">☀️</span>
        <span className="current-temp" id="currentTemp">
          --°C
        </span>
      </div>
      <div className="forecast-grid" id="forecastGrid">
        {/* <!-- Forecast items will be injected here --> */}
      </div>
    </div>
  );
};

export default SideBarWeather;
