import "./StatBlock.css";
import StatBlock from "./StatBlock";
import React, { useContext } from 'react';
import CharacterContext from '../../lib/context';

function StatBlockGrid() {
  const { characterAttr } = useContext(CharacterContext);
  return (
    <div className="stat-block-grid">
      {Object.entries(characterAttr).map(([statType, statVal]) => (
      <StatBlock key={statType} statType={statType.substring(0,3)} statVal={statVal} />))}
    </div>
  );
}

export default StatBlockGrid;
