import React, { useContext } from "react";
import { DataContext } from "../../src/ContentData";

const TravelTipsCard = () => {
  const { tipscard } = useContext(DataContext);
  //   console.log(tipscard);
  return (
    <div className="tips-grid">
      {tipscard.map((item) => (
        <div className="tip-card" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.details}</p>
        </div>
      ))}
    </div>
  );
};

export default TravelTipsCard;
