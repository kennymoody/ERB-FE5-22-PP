import { locations } from "../../dataV2";
import React, { useState, useEffect } from "react";
const plugdelay = 2000;

const PlugSlide = () => {
    const url = new URL(window.location.href);
    const selectedId = url.pathname;
  // const selectedId = "/rome/";
  const location = locations.find((item) => item.path === selectedId);
  const [index, setIndex] = useState(null);


  useEffect(() => {
  if (location.plugimgsrc.length <= 1) return; // Don't auto-slide if 1 or 0 images

  const timer = setTimeout(() => {
    setIndex((prevIndex) => (prevIndex + 1) % location.plugimgsrc.length);
  }, plugdelay);

  return () => clearTimeout(timer); // Important: cleanup!
}, [index, location.plugimgsrc.length, plugdelay]);

  return (
    <div className="plugSlideContainer">
      <div
        className="plugSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {location.plugimgsrc.map((item, index) => {
          return (
            <div className="plug" key={item}>
              <img src={item} alt="" />
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default PlugSlide;
