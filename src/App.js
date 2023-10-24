import React, { useState, useEffect } from "react";
import "./App.css";
// components
import {
  StatBlockGrid,
  HpBlock,
  UniversalBlock,
  SkillsBlock,
  SavingThrowsGrid,
  ProfAndLangBlock,
  ExtraBlock,
  LoadoutPane,
  ActionsPane,
  SpellsPane,
  FeaturesPane,
  SignInButton,
  SaveButton,
  Loader,
  InventoryPane,
} from "./components/Barrel";
// character data
import CharacterContext from "./lib/context";
import {
  fetchCharFields,
  fetchSpellData,
  fetchInventory,
} from "./lib/fetchCharData";

function App() {
  const [activePane, setActivePane] = useState(1);
  const [characterFields, setCharacterFields] = useState(null);
  const [spellData, setSpellData] = useState(null);
  const [changes, setChanges] = useState(null);
  const [spellSlots, setSpellSlots] = useState(null);
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tempCharFields, tempInventory] = await Promise.all([
          fetchCharFields(),
          fetchInventory(),
        ]);
        setSpellData(await fetchSpellData(tempCharFields));
        setCharacterFields(tempCharFields);
        setSpellSlots(tempCharFields.spellSlots);
        setInventory(tempInventory);
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (index) => {
    setActivePane(index);
  };

  if (!characterFields) {
    return <Loader></Loader>; // Or any loading indicator
  }

  return (
    <CharacterContext.Provider
      value={{
        characterFields,
        setCharacterFields,
        changes,
        setChanges,
        spellData,
        spellSlots,
        setSpellSlots,
        inventory,
        setInventory,
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
            <div className="tab" onClick={() => handleTabClick(0)}>
              Actions
            </div>
            <div className="tab" onClick={() => handleTabClick(1)}>
              Spells
            </div>
            <div className="tab" onClick={() => handleTabClick(2)}>
              Loadout
            </div>
            <div className="tab" onClick={() => handleTabClick(3)}>
              Inventory
            </div>
            <div className="tab" onClick={() => handleTabClick(4)}>
              Features and Traits
            </div>
          </div>
          <div className="pane-window">
            {activePane === 0 && <ActionsPane></ActionsPane>}
            {activePane === 1 && <SpellsPane></SpellsPane>}
            {activePane === 2 && <LoadoutPane></LoadoutPane>}
            {activePane === 3 && <InventoryPane></InventoryPane>}
            {activePane === 4 && <FeaturesPane></FeaturesPane>}
          </div>
        </div>
      </div>
    </CharacterContext.Provider>
  );
}

export default App;
