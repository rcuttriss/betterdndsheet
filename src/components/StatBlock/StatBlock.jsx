import "./StatBlock.css";
import React from 'react';

function StatBlock({ statType, statVal }) {
  const shortStatType = statType.substring(0,3);{ 
    const modifier = valToModifier(statVal);
    const colorClass = modifier > 0 ? "green" : modifier === 0 ? "wheat" : "red";
    const modifierString = modifier >= 0 ? `+${modifier}` : `${modifier}`;
    return (
      <div className={`stat ${shortStatType}-stat`}>
        <h3>{statType}</h3>
        <h1 className={`${colorClass}`}>{modifierString}</h1>
        <h3>{statVal}</h3>
      </div>
    );
  }
}

export function valToModifier(val) {
  const modifier = Math.floor((val - 10) / 2);

  return modifier;
}

export default StatBlock;
