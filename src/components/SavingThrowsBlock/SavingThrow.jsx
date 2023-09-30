import "./SavingThrows.css";
import CharacterContext from "../../lib/context";
import { valToModifier } from "../StatBlock/StatBlock";
import { useContext } from "react";
import stringToMap from "../../lib/dataParse";

function SavingThrow({ statType, statVal }) {
  const proficiencyBonuses = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
  const { characterFields } = useContext(CharacterContext);
  const profSavesMap = stringToMap(characterFields.profSaves);
  const proficient = profSavesMap[statType];
  let modifier = valToModifier(statVal);
  if(proficient) {
    modifier += proficiencyBonuses[characterFields.level]
  }
  const colorClass = modifier > 0 ? "green" : modifier === 0 ? "wheat" : "red";
  const modifierString = modifier >= 0 ? `+${modifier}` : `${modifier}`;

  return (
    <div className={`saving-throw ${proficient ? "proficient" : ""}`}>
      <span className="saving-throw-label">{statType.substring(0,3)}</span>
      <span className={`saving-throw-value ${colorClass}`}>
        {modifierString}
      </span>
    </div>
  );
}

export default SavingThrow;
