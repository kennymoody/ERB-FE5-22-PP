import React, { useContext } from "react";
// Get Content Data
import { DataContext } from "../../src/ContentData";

const LocationGallery = () => {
  // 2. 直接拿取主組件已經幫你過濾好的 gallery 陣列
  const { gallery } = useContext(DataContext);

  // 防錯處理：如果該地點完全沒照片，就不要渲染
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="image-gallery">
      {/* 直接拿第一張照片的 title 作為標題 */}
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
