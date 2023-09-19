import "./UniversalBlock.css";

import medalImage from "../../assets/images/medal.png";
import iniImage from "../../assets/images/speed.png";
import walkImage from "../../assets/images/magic-boot.png";
import armorImage from "../../assets/images/shield.png";

import { useContext } from "react";
import CharacterContext from "../../lib/context";

function UniversalBlock() {
  const { characterAttr, characterFields } = useContext(CharacterContext);
    return (
      <div className="universal-block">
        <div className="proficiency-bonus">
          <img id="medal" src={medalImage} alt="Medal"></img>
          <span>Proficiency Bonus: +3</span>
        </div>
        <div className="initiative-modifier">
          <img id="initiative" src={iniImage} alt="Initiative"></img>
          <span>{`Initiative Bonus: ${Math.floor((characterAttr.dexterity-10)/2 )}`}</span>
        </div>
        <div className="walking-speed">
          <img id="walking" src={walkImage} alt="Medal"></img>
          <span>Walking Speed: 25ft</span>
        </div>
        <div className="ac-val">
          <img id="armorclass" src={armorImage} alt="Medal"></img>
          <span>Armor Class: 18</span>
        </div>
      </div>
    );
}

export default UniversalBlock;
