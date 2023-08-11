import React, { useState } from "react";
import "./InventorySlot.css";

const InventorySlot = ({ item }) => {
  const handleClick = () => {
    console.log("print", item);
  };

  return (
    <div className="inv-slot" onClick={handleClick}>
      {item ? (
        <img src={item.imageUrl} alt={item.name} />
      ) : (
        <span>Empty Slot</span>
      )}
    </div>
  );
};

export default InventorySlot;
