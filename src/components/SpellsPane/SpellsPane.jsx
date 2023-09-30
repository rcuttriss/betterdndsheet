import "./SpellsPane.css";
import React, { useContext } from "react";
import fireballPng from "../../assets/images/fireball.png";
import CharacterContext from "../../lib/context";
import Loader from "../Loader/Loader";
import SpellsCounters from "./SpellsCounters";

const SpellsPane = () => {
  const { spellData } = useContext(CharacterContext);

  if (!spellData) {
    return <Loader></Loader>;
  }

  function getLevelSuffix(level) {
    if (level === 1) {
      return "st";
    } else if (level === 2) {
      return "nd";
    } else if (level === 3) {
      return "rd";
    } else {
      return "th";
    }
  }
  

  return (
    <div className="spells-pane">
      <SpellsCounters></SpellsCounters>
      {spellData.map((levelSpells, levelIndex) => {
        if (levelSpells.length === 0) {
          return null;  // Skip rendering if levelSpells is empty
        }

        return (
          <div key={levelIndex}>
            <div className="spell-level-header">{`${levelIndex + 1}${getLevelSuffix(levelIndex + 1)} Level`}</div>
            <div className="spells-flex">
              {levelSpells.map((spell, spellIndex) => (
                <div key={spellIndex} className="spells-options">
                  <img src={fireballPng} alt="fireball" />
                  <div>{spell.name}</div>
                  <div>{spell.castTime}</div>
                  <div>{spell.range}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SpellsPane;
