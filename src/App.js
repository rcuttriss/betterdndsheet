import React, { useState } from "react";
import "./App.css";
import InventorySlot from "./components/InventorySlot/InventorySlot";
import headGearData from "./data/head.json";
import shoulderGearData from "./data/shoulders.json";
import chestGearData from "./data/chest.json";
import legGearData from "./data/legs.json";
import footGearData from "./data/feet.json";

function App() {
  const [openModalSlot, setOpenModalSlot] = useState(null);

  return (
    <div className="App">
      <div className="inv-slot-row">
        <InventorySlot
          slot={"head"}
          openModalSlot={openModalSlot}
          setOpenModalSlot={setOpenModalSlot}
          gearData={headGearData}
        />
        <InventorySlot
          slot={"neck"}
          openModalSlot={openModalSlot}
          setOpenModalSlot={setOpenModalSlot}
          gearData={shoulderGearData}
        />
        <InventorySlot
          slot={"shoulder"}
          openModalSlot={openModalSlot}
          setOpenModalSlot={setOpenModalSlot}
          gearData={shoulderGearData}
        />
        <InventorySlot
          slot={"chest"}
          openModalSlot={openModalSlot}
          setOpenModalSlot={setOpenModalSlot}
          gearData={chestGearData}
        />
        <InventorySlot
          slot={"gloves"}
          openModalSlot={openModalSlot}
          setOpenModalSlot={setOpenModalSlot}
          gearData={headGearData}
        />
        <InventorySlot
          slot={"legs"}
          openModalSlot={openModalSlot}
          setOpenModalSlot={setOpenModalSlot}
          gearData={legGearData}
        />
        <InventorySlot
          slot={"feet"}
          openModalSlot={openModalSlot}
          setOpenModalSlot={setOpenModalSlot}
          gearData={footGearData}
        />
      </div>
      <div className="stat-block"></div>
    </div>
  );
}

export default App;
