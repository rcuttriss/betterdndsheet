import "./ProfAndLangBlock.css";
import CharacterContext from "../../lib/context";
import { useContext } from "react";

function ProfAndLangBlock() {
  const { characterFields, setCharacterFields, setChanges } = useContext(CharacterContext);

  const handleValueChange = (key, value) => {
    setChanges(prevChanges => ({ ...prevChanges, [key]:value }));
    setCharacterFields((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <div className="prof-and-lang-block">
      <div className="prof-and-lang-block-item">
        <h3>Armor</h3>
        <textarea
          type="text"
          value={characterFields.armorStr}
          onChange={(e) => handleValueChange("armorStr", e.target.value)}
        />
      </div>
      <div className="prof-and-lang-block-item">
        <h3>Weapons</h3>
        <textarea
          type="text"
          value={characterFields.weaponsStr}
          onChange={(e) => handleValueChange("weaponsStr", e.target.value)}
        />
      </div>
      <div className="prof-and-lang-block-item">
        <h3>Tools</h3>
        <textarea
          type="text"
          value={characterFields.toolsStr}
          onChange={(e) => handleValueChange("toolsStr", e.target.value)}
        />
      </div>
      <div className="prof-and-lang-block-item">
        <h3>Languages</h3>
        <textarea
          type="text"
          value={characterFields.langStr}
          onChange={(e) => handleValueChange("langStr", e.target.value)}
        />
      </div>
    </div>
  );
}

export default ProfAndLangBlock;
