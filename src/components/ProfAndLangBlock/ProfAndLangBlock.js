import "./ProfAndLangBlock.css";

function ProfAndLangBlock() {
  return (
    <div className="prof-and-lang-block">
      <div class="prof-and-lang-block-item">
        <h3>Armor</h3>
        <span>Heavy Armor, Light Armor, Medium Armor, Shields</span>
      </div>
      <div class="prof-and-lang-block-item">
        <h3>Weapons</h3>
        <span>Battleaxe, Simple Weapons, Warhammer</span>
      </div>
      <div class="prof-and-lang-block-item">
        <h3>Tools</h3>
        <span>Brewer's Supplies</span>
      </div>
      <div class="prof-and-lang-block-item">
        <h3>Languages</h3>
        <span>Common, Deep Speech, Dwarvish, Sylvan</span>
      </div>
    </div>
  );
}

export default ProfAndLangBlock;
