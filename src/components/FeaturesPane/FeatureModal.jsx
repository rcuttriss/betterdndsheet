import React, { useContext, useState } from "react";
import CharacterContext from "../../lib/context";

function FeatureModal ({modalInfo, toggleModal}) {
  const { setChanges, setCharacterFields } = useContext(CharacterContext);
  const [localModalInfo, setLocalModalInfo] = useState(modalInfo);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLocalModalInfo({
      ...localModalInfo,
      [name]: value,
    });
  };

  const confirmFeature = (event) => {
    event.preventDefault();  // Prevent form from submitting the traditional way
    setChanges((prevChanges) => ({
      ...prevChanges,
      [localModalInfo.category]: {
        ...prevChanges[localModalInfo.category],
        [localModalInfo.name]: localModalInfo.desc,
      },
    }));

    setCharacterFields((prevCharacterFields) => ({
        ...prevCharacterFields,
        [localModalInfo.category]: {
          ...prevCharacterFields[localModalInfo.category],
          [localModalInfo.name]: localModalInfo.desc,
        },
      }))

    toggleModal();  // Close the modal after confirming
  };

  return (
    <div className={`add-feature-modal`}>
      <button onClick={toggleModal} className="close-btn">X</button>
      <h2>Add New Feature</h2>
      <form id="featureForm" onSubmit={confirmFeature}>
        <div className="form-group">
          <label htmlFor="featureName">Name:</label>
          <input type="text" id="featureName" name="name" value={localModalInfo.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="featureDesc">Description:</label>
          <textarea id="featureDesc" name="desc" rows="4" value={localModalInfo.desc} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="featureCategory">Category:</label>
          <select id="featureCategory" name="category" value={localModalInfo.category} onChange={handleChange}>
            <option value="classFeatures">Class Feature</option>
            <option value="raceFeatures">Racial Feature</option>
            <option value="feats">Feat</option>
          </select>
        </div>
        <button type="submit" className="confirm-button">Confirm</button>
      </form>
    </div>
  );
}

export default FeatureModal;
