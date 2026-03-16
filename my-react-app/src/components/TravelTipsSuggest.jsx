import React, { useState, useContext } from "react";
import { DataContext } from "../../src/ContentData";

const TravelTipsSuggest = () => {
  const { checklist } = useContext(DataContext);

  // 1. 建立一個 state 來管理哪些 ID 被勾選了
  const [checkedIds, setCheckedIds] = useState([]);

  // 2. 處理勾選切換的邏輯
  const handleCheck = (id) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((itemId) => itemId !== id)); // 取消勾選
    } else {
      setCheckedIds([...checkedIds, id]); // 加入勾選
    }
  };

  // 3. 【最省力 Reset】直接清空陣列，所有 checkbox 會自動取消
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
              // 讓 React 決定是否勾選
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
