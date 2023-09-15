import "./StatBlock.css";
import React, { useContext } from 'react';
import CharacterContext from '../../context/context';

function StatBlock({ statType }) {
  const { characterData, setCharacterData } = useContext(CharacterContext);

  const val = characterData.character.attributes[statType.toLowerCase()];
  const modifier = valToModifier(val);
  const colorClass = modifier > 0 ? "green" : modifier === 0 ? "wheat" : "red";
  const modifierString = modifier >= 0 ? `+${modifier}` : `${modifier}`;
  return (
    <div className={`stat ${statType.substring(0, 3).toLowerCase()}-stat`}>
      <h3>{statType}</h3>
      <h1 className={`${colorClass}`}>{modifierString}</h1>
      <h3>{characterData.character.attributes.strength}</h3>
    </div>
  );
}

export function valToModifier(val) {
  const modifier = Math.floor((val - 10) / 2);

  return modifier;
}

export default StatBlock;
