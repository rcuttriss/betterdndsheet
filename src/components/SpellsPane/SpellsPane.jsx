import "./SpellsPane.css";
import React, { useContext, useState, useEffect, useMemo } from "react";
import { getDoc } from "firebase/firestore";
import fireballPng from "../../assets/images/fireball.png";
import CharacterContext from "../../lib/context";
import Loader from "../Loader/Loader";

const SpellsPane = () => {
  const { spellData } = useContext(CharacterContext);

  if (!spellData) {
    return <Loader></Loader>;
  }

  return (
    <div className="spells-pane">
      {spellData.map((levelSpells, levelIndex) => {
        if (levelSpells.length === 0) {
          return null;  // Skip rendering if levelSpells is empty
        }

        return (
          <div key={levelIndex}>
            <div className="spell-level-header">{`${levelIndex + 1}th Level`}</div>
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
