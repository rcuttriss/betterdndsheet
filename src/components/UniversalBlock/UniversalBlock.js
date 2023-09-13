import "./UniversalBlock.css";

function UniversalBlock() {
  return (
    <div className="universal-block">
      <h3>General Info</h3>
      <div className="proficiency-bonus">Proficiency Bonus: +3</div>
      <div className="initiative-modifier">Initiative Bonus: +0</div>
      <div className="walking-speed">Walking Speed: 25ft</div>
      <div className="ac-val">Armor Class: 18</div>
    </div>
  );
}

export default UniversalBlock;
