import "./SkillsBlock.css";

function SkillsBlock() {
  return (
    <table className="skills-block">
      <thead>
        <tr>
          <th>Proficiency</th>
          <th>Name</th>
          <th>Modifier</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "true" : ""}`}></div>
          </td>
          <td>Acrobatics</td>
          <td>+3</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "true" : ""}`}></div>
          </td>
          <td>Animal Handling</td>
          <td>+1</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${false ? "true" : ""}`}></div>
          </td>
          <td>Arcana</td>
          <td>+2</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${false ? "true" : ""}`}></div>
          </td>
          <td>Athletics</td>
          <td>+1</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${false ? "true" : ""}`}></div>
          </td>
          <td>Deception</td>
          <td>+4</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${false ? "true" : ""}`}></div>
          </td>
          <td>History</td>
          <td>+2</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${false ? "true" : ""}`}></div>
          </td>
          <td>Insight</td>
          <td>+3</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${false ? "true" : ""}`}></div>
          </td>
          <td>Intimidation</td>
          <td>+2</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "true" : ""}`}></div>
          </td>
          <td>Investigation</td>
          <td>+2</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "true" : ""}`}></div>
          </td>
          <td>Medicine</td>
          <td>+2</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "false" : ""}`}></div>
          </td>
          <td>Nature</td>
          <td>+2</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${false ? "true" : ""}`}></div>
          </td>
          <td>Perception</td>
          <td>+3</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "true" : ""}`}></div>
          </td>
          <td>Performance</td>
          <td>+4</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "false" : ""}`}></div>
          </td>
          <td>Persuasion</td>
          <td>+4</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "false" : ""}`}></div>
          </td>
          <td>Religion</td>
          <td>+2</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "false" : ""}`}></div>
          </td>
          <td>Sleight of Hand</td>
          <td>+3</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "false" : ""}`}></div>
          </td>
          <td>Stealth</td>
          <td>+3</td>
        </tr>
        <tr>
          <td className="circleHolder">
            <div className={`profBool ${true ? "true" : ""}`}></div>
          </td>
          <td>Survival</td>
          <td>+2</td>
        </tr>
      </tbody>
    </table>
  );
}

export default SkillsBlock;
