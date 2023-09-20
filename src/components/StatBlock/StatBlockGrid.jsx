import "./StatBlock.css";
import StatBlock from "./StatBlock";
import React, { useContext } from 'react';
import CharacterContext from '../../lib/context';

function StatBlockGrid() {
  const { characterFields } = useContext(CharacterContext);
  const attrArr = characterFields.attrArr;

  return (
    <div className="stat-block-grid">
      <StatBlock statType={"strength"} statVal={attrArr[0]}></StatBlock>
      <StatBlock statType={"dexterity"} statVal={attrArr[1]}></StatBlock>
      <StatBlock statType={"constitution"} statVal={attrArr[2]}></StatBlock>
      <StatBlock statType={"intelligence"} statVal={attrArr[3]}></StatBlock>
      <StatBlock statType={"wisdom"} statVal={attrArr[4]}></StatBlock>
      <StatBlock statType={"charisma"} statVal={attrArr[5]}></StatBlock>
    </div>
  );
}

export default StatBlockGrid;
