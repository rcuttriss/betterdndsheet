import React, { useState, useEffect, useRef } from "react";
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
  updateCharFields,
} from "./lib/fetchCharData";

function App() {
  const [activePane, setActivePane] = useState(1);
  const [characterFields, setCharacterFields] = useState(null);
  const [spellData, setSpellData] = useState(null);
  const [changes, setChanges] = useState({});
  const [spellSlots, setSpellSlots] = useState(null);
  const [inventory, setInventory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const changesRef = useRef(changes);

  useEffect(() => {
    changesRef.current = changes;
  }, [changes]);

  useEffect(() => {
    // fetch data from firestore and update local states
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching character data:", error);
        setError("Failed to fetch character data");
        setLoading(false);
      }
    };

    fetchData();

    // Setting up the auto-save interval
    const autoSaveInterval = setInterval(() => {
      const currentChanges = changesRef.current;

      if (Object.keys(currentChanges).length > 0) {
        updateCharFields(currentChanges)
          .then(() => {
            console.log("Auto-save successful");
            setChanges({}); // Clear the changes after saving
          })
          .catch((error) => {
            console.error("Auto-save failed:", error);
          });
      }
    }, 10000); // 10 seconds interval

    return () => clearInterval(autoSaveInterval);
  }, []);

  const handleTabClick = (index) => {
    setActivePane(index);
  };

  if (loading) {
    return <Loader></Loader>; // Or any loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message
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
