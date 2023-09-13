import "./StatBlock.css";

function StatBlock({ statType, statVal }) {
  const modifier = valToModifier(statVal);
  const colorClass = modifier > 0 ? "green" : modifier === 0 ? "wheat" : "red";
  const modifierString = modifier >= 0 ? `+${modifier}` : `${modifier}`;
  return (
    <div className={`stat ${statType.substring(0, 3).toLowerCase()}-stat`}>
      <h3 className="stat-type">{statType}</h3>
      <h1 className={`stat-modifier str-stat-modifier ${colorClass}`}>
        {modifierString}
      </h1>
      <h3 className="stat-value">{statVal}</h3>
    </div>
  );
}

function valToModifier(val) {
  const modifier = Math.floor((val - 10) / 2);

  return modifier;
}

export default StatBlock;
