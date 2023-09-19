import "./SavingThrows.css";
import SavingThrow from "./SavingThrow";
import React, { useContext } from 'react';
import CharacterContext from '../../lib/context';

function SavingThrowsGrid() {
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
    <div className="saving-throws-grid">
      <h2 className="saving-throw-header">Saving Throws</h2>
      {sortedConventionalStats.map(({ statType, statVal }) => (
        <SavingThrow key={statType} statType={statType.substring(0,3)} statVal={statVal} />
      ))}

      {otherStats.map(({ statType, statVal }) => (
        <SavingThrow key={statType} statType={statType.substring(0,3)} statVal={statVal} />
      ))}
    </div>
  );
}

export default SavingThrowsGrid;
