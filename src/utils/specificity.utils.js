/**
 * Gets the points from a rule
 * @param {string} rule The rule to evaluate
 * @returns {number} The number of points of that CSS selector
 */
const getRulePoints = (rule) => {
  const firstCharacter = rule.charAt(0);
  switch (firstCharacter) {
    case ".":
      return 10;
    case "#":
      return 100;

    default:
      return firstCharacter.match(/[a-z]/i) ? 1 : 0;
  }
};

/**
 * Calculates the points of a CSS instruction
 * @param {string} instruction The CSS instruction to evaluate
 * @returns {number} The total points
 */
const getSpecificityPoints = (instruction) => {
  const selectors = instruction.split(" ");
  const points = selectors.reduce(
    (prev, curr) => prev + getRulePoints(curr),
    0
  );
  return points;
};

export default { getRulePoints, getSpecificityPoints };
