import React, { useState } from "react";
import "./App.css";
import InventorySlot from "./components/InventorySlot/InventorySlot";
import headGearData from "./data/head.json";
import shoulderGearData from "./data/shoulders.json";
import chestGearData from "./data/chest.json";
import legGearData from "./data/legs.json";
import footGearData from "./data/feet.json";
import charInfoData from "./data/charinfo.json";
import StatBlock from "./components/StatBlock/StatBlock";
import HpBlock from "./components/HpBlock/HpBlock";
import UniversalBlock from "./components/UniversalBlock/UniversalBlock";
import SkillsBlock from "./components/SkillsBlock/SkillsBlock";
import SavingThrowsGrid from "./components/SavingThrowsBlock/SavingThrowGrid";
import ProfAndLangBlock from "./components/ProfAndLangBlock/ProfAndLangBlock";
import ExtraBlock from "./components/ExtraBlock/ExtraBlock";

function App() {
  const [openModalSlot, setOpenModalSlot] = useState(null);
  const [charInfo, setCharInfo] = useState(charInfoData);

  return (
    <div className="App">
      <div className="info-block">
        <div className="stat-block">
          <StatBlock
            statType={"Strength"}
            statVal={charInfo.character.attributes.strength}
          ></StatBlock>
          <StatBlock
            statType={"Dexterity"}
            statVal={charInfo.character.attributes.dexterity}
          ></StatBlock>
          <StatBlock
            statType={"Constitution"}
            statVal={charInfo.character.attributes.constitution}
          ></StatBlock>
          <StatBlock
            statType={"Intelligence"}
            statVal={charInfo.character.attributes.intelligence}
          ></StatBlock>
          <StatBlock
            statType={"Wisdom"}
            statVal={charInfo.character.attributes.wisdom}
          ></StatBlock>
          <StatBlock
            statType={"Charisma"}
            statVal={charInfo.character.attributes.charisma}
          ></StatBlock>
        </div>
        <div className="second-row">
          <SavingThrowsGrid
            attrData={charInfo.character.attributes}
          ></SavingThrowsGrid>
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
          <div className="tab">Spells</div>
          <div className="tab">Inventory</div>
          <div className="tab">Features and Traits</div>
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
