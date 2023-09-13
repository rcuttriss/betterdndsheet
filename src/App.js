import React, { useState } from "react";
import "./App.css";
import InventorySlot from "./components/InventorySlot/InventorySlot";
import headGearData from "./data/head.json";
import shoulderGearData from "./data/shoulders.json";
import chestGearData from "./data/chest.json";
import legGearData from "./data/legs.json";
import footGearData from "./data/feet.json";
import StatBlock from "./components/StatBlock/StatBlock";
import HpBlock from "./components/HpBlock/HpBlock";
import UniversalBlock from "./components/UniversalBlock/UniversalBlock";
import SkillsBlock from "./components/SkillsBlock/SkillsBlock";
import SavingThrows from "./components/SavingThrowsBlock/SavingThrows";
import ProfAndLangBlock from "./components/ProfAndLangBlock/ProfAndLangBlock";
import ExtraBlock from "./components/ExtraBlock/ExtraBlock";

function App() {
  const [openModalSlot, setOpenModalSlot] = useState(null);

  return (
    <div className="App">
      <div className="info-block">
        <div className="stat-block">
          <StatBlock statType={"Strength"} statVal={20}></StatBlock>
          <StatBlock statType={"Dexterity"} statVal={14}></StatBlock>
          <StatBlock statType={"Constitution"} statVal={13}></StatBlock>
          <StatBlock statType={"Intelligence"} statVal={6}></StatBlock>
          <StatBlock statType={"Wisdom"} statVal={11}></StatBlock>
          <StatBlock statType={"Charisma"} statVal={10}></StatBlock>
        </div>
        <div className="second-row">
          <SavingThrows></SavingThrows>
          <UniversalBlock></UniversalBlock>
          <HpBlock></HpBlock>
        </div>
        <div className="third-row">
          <SkillsBlock></SkillsBlock>
          <ProfAndLangBlock></ProfAndLangBlock>
        </div>
        <div className="fourth-row">
          <ExtraBlock></ExtraBlock>
        </div>
      </div>
      <div className="equipped">
        <div className="tabs">
          <div className="tab">Actions</div>
          <div className="tab">Extra Actions</div>
          <div className="tab"></div>
          <div className="tab"></div>
        </div>
        <div className="inv-slot-col">
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
        </div>
      </div>
    </div>
  );
}

export default App;
