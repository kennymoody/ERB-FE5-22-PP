import React, { useState, useContext } from "react";
import { DataContext } from "../../src/ContentData";

const TravelTipsSuggest = () => {
  const { checklist } = useContext(DataContext);
  const [checkedIds, setCheckedIds] = useState([]);
  const handleCheck = (id) => {
    // if id is already in checkedIds state, remove it, else add it
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((itemId) => itemId !== id)); // Remove Checked id
    } else {
      setCheckedIds([...checkedIds, id]); // add Checked id
    }
  };
  const resetChecklist = () => {
    setCheckedIds([]);
  };

  return (
    <div className="checklist-container">
      <h2 className="font-serif">Ultimate Packing Checklist</h2>
      <p>Tick off items as you pack to ensure nothing is left behind.</p>

      <div className="checklist-grid">
        {checklist.map((item) => (
          <label className="checklist-item" key={item.id}>
            <input
              type="checkbox"
              checked={checkedIds.includes(item.id)}
              onChange={() => handleCheck(item.id)}
            />
            <span>{item.title}</span>
          </label>
        ))}
      </div>
      <div className="checklist-resetbtn">
        <button className="btn" onClick={resetChecklist}>
          Reset Checklist
        </button>
      </div>
    </div>
  );
};

export default TravelTipsSuggest;
