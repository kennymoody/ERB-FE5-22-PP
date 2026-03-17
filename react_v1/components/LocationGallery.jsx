import React from "react";
import { locationGallery } from "../../dataV2";

const LocationGallery = () => {
  const url = new URL(window.location.href);
  const selectedId = url.pathname;
  const filteredGallery = locationGallery.filter(
    (location) => location.path === selectedId,
  );
  const filteredGalleryLinks = filteredGallery.map(
    (location) => location.imagesrc,
  );
//   console.log(filteredGallery);
//   console.log(filteredGalleryLinks);

  return (
    <section className="image-gallery">
      <h2>{filteredGallery[0].title}</h2>
      <div className="gallery-grid">
        {filteredGalleryLinks.map((imagesrc) => (
          <div className="gallery-item">
            <a key={imagesrc} href={imagesrc}>
              <img src={imagesrc} referrerPolicy="no-referrer" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationGallery;
