import React, { useState } from "react";
import "./App.css";
import charInfoData from "./data/charinfo.json";
import StatBlock from "./components/StatBlock/StatBlock";
import HpBlock from "./components/HpBlock/HpBlock";
import UniversalBlock from "./components/UniversalBlock/UniversalBlock";
import SkillsBlock from "./components/SkillsBlock/SkillsBlock";
import SavingThrowsGrid from "./components/SavingThrowsBlock/SavingThrowGrid";
import ProfAndLangBlock from "./components/ProfAndLangBlock/ProfAndLangBlock";
import ExtraBlock from "./components/ExtraBlock/ExtraBlock";
import InventoryPane from "./components/InventoryPane/InventoryPane";
import ActionsPane from "./components/ActionsPane/ActionsPane";
import SpellsPane from "./components/SpellsPane/SpellsPane";

function App() {
  const [activePane, setActivePane] = useState(0);
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
          <div className="tab" onClick={() => setActivePane(0)}>
            Actions
          </div>
          <div className="tab" onClick={() => setActivePane(1)}>
            Spells
          </div>
          <div className="tab" onClick={() => setActivePane(2)}>
            Inventory
          </div>
          <div className="tab" onClick={() => setActivePane(3)}>
            Features and Traits
          </div>
        </div>
        <div className="pane-window">
          {activePane === 0 && <ActionsPane></ActionsPane>}
          {activePane === 1 && <SpellsPane></SpellsPane>}
          {activePane === 2 && <InventoryPane></InventoryPane>}
          {activePane === 3 && <InventoryPane></InventoryPane>}
        </div>
      </div>
    </div>
  );
}

export default App;
