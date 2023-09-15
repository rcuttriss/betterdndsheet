import "./SavingThrows.css";
import SavingThrow from "./SavingThrow";
import React, { useContext } from 'react';
import CharacterContext from '../../context/context';

function SavingThrowsGrid({ attrData }) {
  const { characterData, setCharacterData } = useContext(CharacterContext);

  return (
    <div className="saving-throws-grid">
      <h2 className="saving-throw-header">Saving Throws</h2>
      <SavingThrow statType="Str" statVal={characterData.character.attributes.strength}></SavingThrow>
      <SavingThrow statType="Dex" statVal={characterData.character.attributes.dexterity}></SavingThrow>
      <SavingThrow statType="Con" statVal={characterData.character.attributes.constitution}></SavingThrow>
      <SavingThrow statType="Int" statVal={characterData.character.attributes.intelligence}></SavingThrow>
      <SavingThrow statType="Wis" statVal={characterData.character.attributes.wisdom}></SavingThrow>
      <SavingThrow statType="Cha" statVal={characterData.character.attributes.charisma}></SavingThrow>
    </div>
  );
}

export default SavingThrowsGrid;
