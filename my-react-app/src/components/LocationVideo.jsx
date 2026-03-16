import { useState } from "react";
import { locations } from "../../dataV2";
const LocationVideo = () => {
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  const location = locations.find((item) => item.path === selectedId);
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
