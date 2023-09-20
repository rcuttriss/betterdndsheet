import "./ExtraBlock.css";
import CharacterContext from "../../lib/context";
import { useContext } from "react";

function ExtraBlock() {
  const { characterFields, setCharacterFields, setChanges } = useContext(CharacterContext);

  const handleValueChange = (key, value) => {
    setChanges(prevChanges => ({ ...prevChanges, [key]:value }));
    setCharacterFields((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };
  
  return (
    <div className="extra-block">
      <div className="extra-block-item">
        <h3>Defense</h3>
        <input
          type="text"
          value={characterFields.defenseStr}
          onChange={(e) => handleValueChange("defenseStr", e.target.value)}
        />
      </div>
      <div className="extra-block-item">
        <h3>Conditions</h3>
        <input
          type="text"
          value={characterFields.conditionsStr}
          onChange={(e) => handleValueChange("conditionsStr", e.target.value)}
        />
      </div>
    </div>
  );
}

export default ExtraBlock;
