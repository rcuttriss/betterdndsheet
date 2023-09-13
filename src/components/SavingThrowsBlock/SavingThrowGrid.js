import "./SavingThrows.css";
import SavingThrow from "./SavingThrow";

function SavingThrowsGrid({ attrData }) {
  return (
    <div className="saving-throws-grid">
      <h2 className="saving-throw-header">Saving Throws</h2>
      <SavingThrow statType="Str" statVal={attrData.strength}></SavingThrow>
      <SavingThrow statType="Dex" statVal={attrData.dexterity}></SavingThrow>
      <SavingThrow statType="Con" statVal={attrData.constitution}></SavingThrow>
      <SavingThrow statType="Int" statVal={attrData.intelligence}></SavingThrow>
      <SavingThrow statType="Wis" statVal={attrData.wisdom}></SavingThrow>
      <SavingThrow statType="Cha" statVal={attrData.charisma}></SavingThrow>
    </div>
  );
}

export default SavingThrowsGrid;
