/**
 * Gets the points from a rule
 * @param {string} rule The rule to evaluate
 * @returns {number} The number of points of that CSS selector
 */
function getRulePoints(rule) {
  const firstCharacter = rule.charAt(0);

  if (rule.length === 1) {
    return 1;
  } else if (rule.length <= 0) {
    return 0;
  }

  switch (firstCharacter) {
    case ".":
      return 10;
    case "#":
      return 100;

    default:
      return firstCharacter.match(/[a-z]/i) ? 1 : 0;
  }
}

/**
 * Calculates the points of a CSS instruction
 * @param {string} instruction The CSS instruction to evaluate
 * @returns {number} The total points
 */
function getSpecificityPoints(instruction) {
  const selectors = instruction.split(" ");
  const points = selectors.reduce(
    (prev, curr) => prev + getRulePoints(curr),
    0
  );
  return points;
}

/**
 * Evaluates multiple rules at once
 * @param {Object} props All of the rules to evaluate
 * @param {String[]} props.rules All of the rules to evaluate
 * @param {boolean?} props.ascending If it will be ascending, it won't by default
 * @param {boolean?} props.withScores Will it return the scores, it will by default
 * @returns {[String, Number][]} The same array sorted
 */
function evaluateRules({ rules, ascending = false, withScores = true }) {
  const rulesWithScores = rules.map((rule) => [
    rule,
    getSpecificityPoints(rule),
  ]);

  let sortedRules = rulesWithScores.sort((a, b) => {
    if (a == b) return 0;

    // If the condition is true, it will be a one, if it's not, it will be converted to -1
    let result = Number(ascending ? a < b : a > b);
    if (result == 0) result = 1;

    return result;
  });

  if (!withScores) {
    sortedRules = sortedRules.map(([rule]) => rule);
  }

  return sortedRules;
}
