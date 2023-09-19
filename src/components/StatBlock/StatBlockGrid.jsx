import "./StatBlock.css";
import StatBlock from "./StatBlock";
import React, { useContext } from 'react';
import CharacterContext from '../../lib/context';

function StatBlockGrid() {
  const { characterAttr } = useContext(CharacterContext);

  // Define the order for the first 6 stats (conventional D&D order)
  const orderedStats = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];

  // Sort the conventionalStats array based on the order defined in orderedStats
  const sortedConventionalStats = orderedStats
    .filter(statType => characterAttr.hasOwnProperty(statType))
    .map(statType => ({ statType, statVal: characterAttr[statType] }));

  // Separate the rest of the stats
  const otherStats = Object.keys(characterAttr)
    .filter(statType => !orderedStats.includes(statType))
    .sort()
    .map(statType => ({ statType, statVal: characterAttr[statType] }));

  return (
    <div className="stat-block-grid">
      {sortedConventionalStats.map(({ statType, statVal }) => (
        <StatBlock key={statType} statType={statType} statVal={statVal} />
      ))}

      {otherStats.map(({ statType, statVal }) => (
        <StatBlock key={statType} statType={statType} statVal={statVal} />
      ))}
    </div>
  );
}

export default StatBlockGrid;
