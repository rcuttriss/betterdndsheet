import "./HpBlock.css";
import { useContext, useState } from "react";
import CharacterContext from "../../lib/context";

function HpBlock() {
  const { characterFields, setCharacterFields } = useContext(CharacterContext);
  const [ inputValue, setInputValue ] = useState('');
    const handlehealClick = () => {
      const damageValue = parseInt(inputValue, 10) || 0; // Parse to integer, default to 0 if not a valid number
      const newHp = characterFields.currHp + damageValue;
      setCharacterFields({ ...characterFields, currHp: newHp });
    };
    const handleDamageClick = () => {
      const damageValue = parseInt(inputValue, 10) || 0; // Parse to integer, default to 0 if not a valid number
      const newHp = characterFields.currHp - damageValue;
      setCharacterFields({ ...characterFields, currHp: newHp });
    };
  return (
    <div className="hp-block">
      <div className="change-hp-input">
        <button id="plus" onClick={handlehealClick}>Heal</button>
        <input type="number" id="value" value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button id="minus" onClick={handleDamageClick}>Damage</button>
      </div>
      <div className="hp-display">{`${characterFields.currHp}/55`}</div>
      <div className="temp-hp-display">0</div>
    </div>
  );
}

export default HpBlock;
