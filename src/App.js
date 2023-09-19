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
import SignInButton from "./components/SignInButton/SignInButton";
// character data
import CharacterContext from "./lib/context";
import { fetchCharFields, fetchCharAttr } from "./lib/fetchCharData";

function App() {
  const [activePane, setActivePane] = useState(0);
  const [characterFields, setCharacterFields] = useState(null);
  const [characterAttr, setCharacterAttr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCharacterFields(await fetchCharFields()); // Set character data as the initial state
        setCharacterAttr(await fetchCharAttr());
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, []);

  if (!characterFields || !characterAttr) {
    return <div>Loading...</div>; // Or any loading indicator
  }

  return (
    <CharacterContext.Provider
      value={{
        characterFields,
        setCharacterFields,
        characterAttr,
        setCharacterAttr,
      }}
    >
      <div className="App">
        <SignInButton />
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
            {activePane === 3 && <InventoryPane></InventoryPane>}
          </div>
        </div>
      </div>
    </CharacterContext.Provider>
  );
}

export default App;
