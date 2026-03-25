import React, { useState, useEffect } from "react";
import { locationGallery } from "../../dataV2";
const delay = 8000;

const Slide = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
  if (locationGallery.length <= 1) return; // Don't auto-slide if 1 or 0 images

  const timer = setTimeout(() => {
    setIndex((prevIndex) => (prevIndex + 1) % locationGallery.length);
  }, delay);

  return () => clearTimeout(timer); // Important: cleanup!
}, [index, locationGallery.length, delay]);


  return (
    <div className="slideContainer">
      <div
        className="slider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {locationGallery.map((item, index) => {
          return (
            <a href={item.path} key={item.id}>
              <div
                className="slides"
                style={{
                  backgroundImage: `url(${item.imagesrc})`,
                }}
              >
                <div className="slideOverlay"></div>
                <img src={item.imagesrc} alt="" />
                <div className="slideinfo">
                  <h1>{item.name}</h1>
                  <h2>" {item.info} "</h2>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;
