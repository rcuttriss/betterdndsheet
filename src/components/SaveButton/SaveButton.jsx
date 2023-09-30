import React, { useContext } from "react";
import CharacterContext from "../../lib/context";

function SaveButton() {
  const { updateCharFields, changes } = useContext(CharacterContext);

  const handleSave = () => {
    // Assuming you have the changes you want to save in your context
    // You should have a state for changes in your context to update
    updateCharFields(changes);
  };

  return <button onClick={handleSave}>Save</button>;
}

export default SaveButton;
