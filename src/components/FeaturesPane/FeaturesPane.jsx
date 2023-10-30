import "./FeaturesPane.css"
import { useContext, useState } from "react";
import CharacterContext from "../../lib/context";
import AddFeatureButton from "./AddFeatureButton";
import FeatureModal from "./FeatureModal";

function FeaturesPane() {
    const { characterFields, setCharacterFields, setChanges } = useContext(CharacterContext);
    const classFeatures = characterFields.classFeatures;
    const raceFeatures = characterFields.raceFeatures;
    const feats = characterFields.feats;
    const [editDialogOn, setEditDialogOn] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

    function toggleModal(name,desc,category) {
        setEditDialogOn((prev) => !prev);
        setModalInfo({
            oldName: name,
            name: name,
            desc: desc,
            category: category
        })
    }

    function removeFeature( name, category ) {
        let newCharFields;
        setCharacterFields((prevCharacterFields) => {
            newCharFields = {...prevCharacterFields};
            delete newCharFields[category][name];
            return newCharFields;
        });
        setChanges((prevChanges) => {
            let newChanges = {...prevChanges};
            // Initialize the category in changes if it doesn't exist
            if (!newChanges[category]) {
                newChanges[category] = {};
            }
            // Add everything but the removed item
            newChanges[category] = {...newCharFields[category]};
            return newChanges;
        });
    }

    return (
        <div className="feature-pane">
            { Object.keys(classFeatures).length > 0 && (
                <div className="feature-category">
                    <div className="feature-header">Class Features</div>
                    {Object.keys(classFeatures).map((key) => (
                        <div key={key} className="feature">
                            <div className="feature-name">{key}</div>
                            <div className="feature-desc">{classFeatures[key]}</div>
                            <span onClick={() => toggleModal(key,classFeatures[key],"classFeatures")}>Edit</span>
                            <span onClick={() => removeFeature(key,"classFeatures")}>X</span>
                        </div>
                    ))}
                </div>
            )}
            { Object.keys(raceFeatures).length > 0 && (
                <div className="feature-category">
                    <div className="feature-header">Racial Features</div>
                    {Object.keys(raceFeatures).map((key) => (
                        <div key={key} className="feature">
                            <div className="feature-name">{key}</div>
                            <div className="feature-desc">{raceFeatures[key]}</div>
                            <span onClick={() => toggleModal(key,raceFeatures[key],"raceFeatures")}>Edit</span>
                            <span onClick={() => removeFeature(key,"raceFeatures")}>X</span>
                        </div>
                    ))}
                </div>
            )}
            { Object.keys(feats).length > 0 ? (
                <div className="feature-category">
                    <div className="feature-header">Feats</div>
                    {Object.keys(feats).map((key) => (
                        <div key={key} className="feature">
                            <div className="feature-name">{key}</div>
                            <div className="feature-desc">{feats[key]}</div>
                            <span onClick={() => toggleModal(key,feats[key],"feats")}>Edit</span>
                            <span onClick={() => removeFeature(key,"feats")}>X</span>
                        </div>
                    ))}
                </div>
            ) : null}
            <AddFeatureButton></AddFeatureButton>
            {editDialogOn && <FeatureModal modalInfo={modalInfo} toggleModal={toggleModal} />}
        </div>
    );
}

export default FeaturesPane;
