import "./SaveButton.css"
import React, { useContext } from "react";
import CharacterContext from "../../lib/context";
import { updateCharFields } from "../../lib/fetchCharData";
import { ReactComponent as FloppyDisk } from '../../assets/images/floppy-disk-regular.svg';

function SaveButton() {
  const { changes } = useContext(CharacterContext);

  const handleSave = () => {
    // Assuming you have the changes you want to save in your context
    // You should have a state for changes in your context to update
    updateCharFields(changes);
  };

  return <button className="save-button" onClick={handleSave}>
      <FloppyDisk></FloppyDisk>
    </button>;
}

export default SaveButton;
