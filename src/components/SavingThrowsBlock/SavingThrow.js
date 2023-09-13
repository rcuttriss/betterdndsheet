import "./SavingThrows.css";
import { valToModifier } from "../StatBlock/StatBlock";

function SavingThrow({ statType, statVal }) {
  const modifier = valToModifier(statVal);
  const colorClass = modifier > 0 ? "green" : modifier === 0 ? "wheat" : "red";
  const modifierString = modifier >= 0 ? `+${modifier}` : `${modifier}`;

  return (
    <div className="saving-throw">
      <span className="saving-throw-label">{statType}</span>
      <span className={`saving-throw-value ${colorClass}`}>
        {modifierString}
      </span>
    </div>
  );
}

export default SavingThrow;
