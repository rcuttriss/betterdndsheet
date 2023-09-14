import "./InventoryPane.css"
import InventorySlot from "../InventorySlot/InventorySlot";
import headGearData from "../../data/head.json";
import shoulderGearData from "../../data/shoulders.json";
import chestGearData from "../../data/chest.json";
import legGearData from "../../data/legs.json";
import footGearData from "../../data/feet.json";
import React, { useState } from "react";


function InventoryPane() {
    const [openModalSlot, setOpenModalSlot] = useState(null);

    return (<div className="inv-pane"><div className="inv-slot-col">
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
  <div className="inv-slot-row">
    <InventorySlot
      slot={"weaponMainHand"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={headGearData}
    />
    <InventorySlot
      slot={"weaponOffHand"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={headGearData}
    />
  </div></div>);
}

export default InventoryPane;