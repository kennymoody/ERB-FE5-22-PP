import React, { useContext } from "react";
// Get Content Data
import { DataContext } from "../../src/ContentData";

const LocationGallery = () => {
  const { gallery } = useContext(DataContext);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="image-gallery">
      <h2>{gallery[0].title}</h2>
      <div className="gallery-grid">
        {gallery.map((item) => (
          <div className="gallery-item" key={item.id}>
            <a href={item.imagesrc} target="_blank" rel="noreferrer">
              <img
                src={item.imagesrc}
                alt={item.title}
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationGallery;
