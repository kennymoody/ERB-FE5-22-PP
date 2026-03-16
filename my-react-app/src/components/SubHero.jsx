import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";
const SubHeroSection = () => {
  const { subHero } = useContext(DataContext);
  // console.log(subHero);
  return (
    <section className="detail-hero">
      <div className="detail-hero-content">
        <h1>{subHero.title}</h1>
        <p>{subHero.detail}</p>
      </div>
    </section>
  );
};

export default SubHeroSection;
