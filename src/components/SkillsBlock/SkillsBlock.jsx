import "./SkillsBlock.css";
import CharacterContext from "../../lib/context";
import { useContext } from "react";
import stringToMap from "../../lib/dataParse";

function SkillsBlock() {
  const strToIndex = {
    "strength": 0,
    "dexterity": 1,
    "constitution": 2,
    "intelligence": 3,
    "wisdom": 4,
    "charisma": 5
  }
  function valToModifier(val) {
    const modifier = Math.floor((parseInt(val) - 10) / 2);
  
    return modifier;
  }
  const { characterFields } = useContext(CharacterContext);
  const proficiencyBonuses = [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5];
  const profSkillsMap = stringToMap(characterFields.profSkills);
  const dndBaseSkills = {
    acrobatics: 'dexterity',
    animalHandling: 'wisdom',
    arcana: 'intelligence',
    athletics: 'strength',
    deception: 'charisma',
    history: 'intelligence',
    insight: 'wisdom',
    intimidation: 'charisma',
    investigation: 'intelligence',
    medicine: 'wisdom',
    nature: 'intelligence',
    perception: 'wisdom',
    performance: 'charisma',
    persuasion: 'charisma',
    religion: 'intelligence',
    sleightOfHand: 'dexterity',
    stealth: 'dexterity',
    survival: 'wisdom'
  };
  return (
    <table className="skills-block">
      <thead>
        <tr>
          <th className="start">Name</th>
          <th className="skillMod">Modifier</th>
          <th className="skillMod">Bonus</th>
        </tr>
      </thead>
      <tbody>
      {Object.entries(dndBaseSkills).map(([skill, statType]) => {
          let modifier = valToModifier(characterFields.attrArr[strToIndex[statType]]);
          const proficient = profSkillsMap[skill];
          if(proficient) {
            modifier += proficiencyBonuses[characterFields.level]
          }
          const colorClass = modifier > 0 ? "green" : modifier === 0 ? "wheat" : "red";
          const modifierSign = modifier >= 0 ? "+" : "-";
    
          return (
            <tr key={skill} className={proficient ? "profSkill" : ""}> 
              <td>{skill}</td>
              <td className="skillMod">{statType.substring(0,3)}</td>
              <td className={`skillMod ${colorClass}`}>
                {modifierSign}{Math.abs(modifier)} {/* Display sign and absolute value */}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default SkillsBlock;
