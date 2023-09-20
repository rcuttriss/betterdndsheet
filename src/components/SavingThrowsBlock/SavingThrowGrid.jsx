import "./SavingThrows.css";
import SavingThrow from "./SavingThrow";
import React, { useContext } from 'react';
import CharacterContext from '../../lib/context';

function SavingThrowsGrid() {
  const { characterFields } = useContext(CharacterContext);
  const attrArr = characterFields.attrArr;

  return (
    <div className="saving-throws-grid">
      <h2 className="saving-throw-header">Saving Throws</h2>
      <SavingThrow statType={"strength"} statVal={attrArr[0]}></SavingThrow>
      <SavingThrow statType={"dexterity"} statVal={attrArr[1]}></SavingThrow>
      <SavingThrow statType={"constitution"} statVal={attrArr[2]}></SavingThrow>
      <SavingThrow statType={"intelligence"} statVal={attrArr[3]}></SavingThrow>
      <SavingThrow statType={"wisdom"} statVal={attrArr[4]}></SavingThrow>
      <SavingThrow statType={"charisma"} statVal={attrArr[5]}></SavingThrow>
    </div>
  );
}

export default SavingThrowsGrid;
