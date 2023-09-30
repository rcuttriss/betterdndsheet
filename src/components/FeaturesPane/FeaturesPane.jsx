import "./FeaturesPane.css"
import { useContext } from "react";
import CharacterContext from "../../lib/context";

function FeaturesPane() {
    const { characterFields } = useContext(CharacterContext);
    const classFeatures = characterFields.classFeatures;
    const raceFeatures = characterFields.raceFeatures;

    return (
        <div className="feature-pane">
            <div className="feature-category">
                <div className="feature-header">Class Features</div>
                {Object.keys(classFeatures).map((key) => (
                    <div key={key} className="feature">
                        <div className="feature-name">{key}</div>
                        <div className="feature-desc">{classFeatures[key]}</div>
                    </div>
                ))}
            </div>
            <div className="feature-category">
                <div className="feature-header">Racial Features</div>
                {Object.keys(raceFeatures).map((key) => (
                    <div key={key} className="feature">
                        <div className="feature-name">{key}</div>
                        <div className="feature-desc">{raceFeatures[key]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FeaturesPane;
