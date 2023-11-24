import "./LoadoutPane.css"
import LoadoutSlot from "../LoadoutSlot/LoadoutSlot";
import headGearData from "../../data/head.json";
import shoulderGearData from "../../data/shoulders.json";
import chestGearData from "../../data/chest.json";
import legGearData from "../../data/legs.json";
import footGearData from "../../data/feet.json";
import React, { useState } from "react";


function LoadoutPane() {
    const [openModalSlot, setOpenModalSlot] = useState(null);

    return (<div className="loadout-pane"><div className="inv-slot-col">
    <LoadoutSlot
      slot={"head"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={headGearData}
    />
    <LoadoutSlot
      slot={"neck"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot} 
      gearData={shoulderGearData}
    />
    <LoadoutSlot
      slot={"chest"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={chestGearData}
    />
    <LoadoutSlot
      slot={"gloves"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={headGearData}
    />
    <LoadoutSlot
      slot={"legs"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={legGearData}
    />
    <LoadoutSlot
      slot={"feet"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={footGearData}
    />
  </div>
  <div className="inv-slot-row">
    <LoadoutSlot
      slot={"weaponMainHand"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={headGearData}
    />
    <LoadoutSlot
      slot={"weaponOffHand"}
      openModalSlot={openModalSlot}
      setOpenModalSlot={setOpenModalSlot}
      gearData={headGearData}
    />
  </div></div>);
}

export default LoadoutPane;