function stringToMap(skillString) {
  const skillsArray = skillString.split(",").map((skill) => skill.trim());
  const skillsMap = {};

  skillsArray.forEach((skill) => {
    skillsMap[skill] = true;
  });

  return skillsMap;
}

export default stringToMap;
