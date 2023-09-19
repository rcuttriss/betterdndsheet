import "./SavingThrows.css";
import SavingThrow from "./SavingThrow";
import React, { useContext } from 'react';
import CharacterContext from '../../lib/context';

function SavingThrowsGrid() {
  const { characterAttr } = useContext(CharacterContext);
  if(characterAttr === null) {
    return <div>loading man loading...</div>
  } else { 
  return (
    <div className="saving-throws-grid">
      <h2 className="saving-throw-header">Saving Throws</h2>
      {Object.entries(characterAttr).map(([statType, statVal]) => (
    <SavingThrow key={statType} statType={statType.substring(0,3)} statVal={statVal} />))}
    </div>
  );
  }
}

export default SavingThrowsGrid;
