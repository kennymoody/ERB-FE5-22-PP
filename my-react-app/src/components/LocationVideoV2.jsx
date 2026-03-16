import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";
const LocationVideo = () => {
  const { location } = useContext(DataContext);
  if (!location) return null;

  return (
    <div className="video-container">
      <iframe
        width="100%"
        height="100%"
        src={location.video}
        title={location.videotitle}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default LocationVideo;
