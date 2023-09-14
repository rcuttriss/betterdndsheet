import "./HpBlock.css";

function HpBlock() {
  return (
    <div className="hp-block">
      <div className="change-hp-input">
        <button id="plus">Heal</button>
        <input type="text" id="value" value="0" readonly></input>
        <button id="minus">Damage</button>
      </div>
      <div className="hp-display">55/55</div>
      <div className="temp-hp-display">0</div>
    </div>
  );
}

export default HpBlock;
