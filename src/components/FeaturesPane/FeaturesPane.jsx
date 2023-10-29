import "./FeaturesPane.css"
import { useContext } from "react";
import CharacterContext from "../../lib/context";

function FeaturesPane() {
    const { characterFields } = useContext(CharacterContext);
    const classFeatures = characterFields.classFeatures;
    const raceFeatures = characterFields.raceFeatures;
    const feats = characterFields.feats;

    return (
        <div className="feature-pane">
            { Object.keys(classFeatures).length > 0 && (
                <div className="feature-category">
                    <div className="feature-header">Class Features</div>
                    {Object.keys(classFeatures).map((key) => (
                        <div key={key} className="feature">
                            <div className="feature-name">{key}</div>
                            <div className="feature-desc">{classFeatures[key]}</div>
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
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default FeaturesPane;
