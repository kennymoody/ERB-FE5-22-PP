import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";
const LocationVideo = () => {
  const { location } = useContext(DataContext);
  if (!location) return null;

  return (
    <div className="video-container">
      <iframe
        src={location.video}
        title={location.videotitle}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default LocationVideo;
