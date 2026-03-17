import React, { useEffect, useState } from "react";

const SideBarWeather = ({ weathertitle, weatherlat, weatherlon }) => {
  const base_url =
    "https://api.open-meteo.com/v1/forecast?&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=3";
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      let res = await fetch(
        `${base_url}&latitude=${weatherlat}&longitude=${weatherlon}`,
      );
      if (!res.ok) throw new Error("API error");

      let jsondata = await res.json();
      // console.log(jsondata);

      const getWeatherIcon = (code) => {
        if (code === 0) return "☀️";
        if ([1, 2, 3].includes(code)) return "⛅";
        if ([45, 48].includes(code)) return "🌫️";
        if ([51, 53, 55].includes(code)) return "🌦️";
        if ([56, 57].includes(code)) return "🥶";
        if ([61, 63, 65].includes(code)) return "🌧️";
        if ([66, 67].includes(code)) return "🧊";
        if ([71, 73, 75].includes(code)) return "❄️";
        if (code === 77) return "	🧂";
        if ([80, 81, 82].includes(code)) return "🚿";
        if ([85, 86].includes(code)) return "🏔️";
        if ([95, 96, 99].includes(code)) return "🌩️";
        return "☀️";
      };

      // 2. 更新 State
      setWeatherData({
        // isDay: jsondata.current_weather.is_day,
        temp: jsondata.current_weather.temperature,
        icon: getWeatherIcon(jsondata.current_weather.weathercode),
        times: jsondata.daily.time,
        mintemps: jsondata.daily.temperature_2m_min,
        maxtemps: jsondata.daily.temperature_2m_max,
      });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    // 3. 加入相依陣列，當座標改變時重新抓取
  }, [weatherlat, weatherlon]);

  if (!weatherData) return <div>Loading...</div>;

  return (
    <div className="weather-widget" id="weatherWidget">
      <div className="weather-header">
        <h4>Local Weather</h4>
        <span>{weathertitle}</span>
      </div>
      <div className="current-weather">
        <span className="weather-icon">
          {weatherData ? `${weatherData.icon}` : "Loading..."}
        </span>
        <span className="current-temp" id="currentTemp">
          {weatherData ? `${weatherData.temp}°C` : "Loading..."}
        </span>
      </div>
      <div className="forecast-grid" id="forecastGrid">
        {weatherData.times.map((time, index) => (
          <div key={index} className="forecast-day">
            <div className="forecast-date">
              {new Date(time).toLocaleDateString("en-US", { weekday: "short" })}
            </div>
            <div className="forecast-temp">
              {Math.round(weatherData.mintemps[index])}° /{" "}
              {Math.round(weatherData.maxtemps[index])}°
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarWeather;
