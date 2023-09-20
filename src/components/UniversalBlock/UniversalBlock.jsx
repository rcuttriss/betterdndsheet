import "./UniversalBlock.css";

import medalImage from "../../assets/images/medal.png";
import iniImage from "../../assets/images/speed.png";
import walkImage from "../../assets/images/magic-boot.png";
import armorImage from "../../assets/images/shield.png";

import { useContext } from "react";
import CharacterContext from "../../lib/context";

function UniversalBlock() {
  const { characterFields } = useContext(CharacterContext);
  const initiative = Math.floor((characterFields.attrArr[1]-10)/2 )
  const proficiencyBonuses = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];

  function getProficiencyBonus(level) {
    if (level < 1 || level > proficiencyBonuses.length) {
      throw new Error('Level out of range');
    }
    return proficiencyBonuses[level - 1];
  }
    return (
      <div className="universal-block">
        <div className="proficiency-bonus">
          <img id="medal" src={medalImage} alt="Medal"></img>
          <span>{`Proficiency Bonus: +${getProficiencyBonus(characterFields.level)}`}</span>
        </div>
        <div className="initiative-modifier">
          <img id="initiative" src={iniImage} alt="Initiative"></img>
          <span>{`Initiative Bonus: ${initiative > 0 ? "+" : "-"}${initiative}`}</span>
        </div>
        <div className="walking-speed">
          <img id="walking" src={walkImage} alt="Medal"></img>
          <span>{`Walking Speed: ${characterFields.speedFT}`}ft</span>
        </div>
        <div className="ac-val">
          <img id="armorclass" src={armorImage} alt="Medal"></img>
          <span>Armor Class: XX</span>
        </div>
      </div>
    );
}

export default UniversalBlock;
