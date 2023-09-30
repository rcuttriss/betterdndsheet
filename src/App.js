import React, { useState, useEffect } from "react";
import "./App.css";
// components
import StatBlockGrid from "./components/StatBlock/StatBlockGrid";
import HpBlock from "./components/HpBlock/HpBlock";
import UniversalBlock from "./components/UniversalBlock/UniversalBlock";
import SkillsBlock from "./components/SkillsBlock/SkillsBlock";
import SavingThrowsGrid from "./components/SavingThrowsBlock/SavingThrowGrid";
import ProfAndLangBlock from "./components/ProfAndLangBlock/ProfAndLangBlock";
import ExtraBlock from "./components/ExtraBlock/ExtraBlock";
import InventoryPane from "./components/InventoryPane/InventoryPane";
import ActionsPane from "./components/ActionsPane/ActionsPane";
import SpellsPane from "./components/SpellsPane/SpellsPane";
import FeaturesPane from "./components/FeaturesPane/FeaturesPane";
import SignInButton from "./components/SignInButton/SignInButton";
import SaveButton from "./components/SaveButton/SaveButton";
import Loader from "./components/Loader/Loader";
// character data
import CharacterContext from "./lib/context";
import { fetchCharFields, fetchSpellData } from "./lib/fetchCharData";

function App() {
  const [activePane, setActivePane] = useState(1);
  const [characterFields, setCharacterFields] = useState(null);
  const [spellData, setSpellData] = useState(null);
  const [changes, setChanges] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tempCharFields = await fetchCharFields();
        setCharacterFields(tempCharFields);
        setSpellData(await fetchSpellData(tempCharFields));
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, []);

  if (!characterFields) {
    return <Loader></Loader>; // Or any loading indicator
  }

  return (
    <CharacterContext.Provider
      value={{
        characterFields,
        setCharacterFields,
        setChanges,
        spellData,
      }}
    >
      <div className="App">
        <SignInButton />
        <SaveButton></SaveButton>
        <div className="info-block">
          <div className="stat-block">
            <StatBlockGrid></StatBlockGrid>
          </div>
          <div className="second-row">
            <SavingThrowsGrid></SavingThrowsGrid>
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
            {activePane === 3 && <FeaturesPane></FeaturesPane>}
          </div>
        </div>
      </div>
    </CharacterContext.Provider>
  );
}

export default App;
