/**
 * Gets the value of the input
 * @param {INPUT_TYPE} inputType Either single or multi
 * @returns {string} The input value
 */
function getInputValue(inputType) {
  const input = document.querySelector(INPUT_QUERIES[inputType]);

  if (!input) {
    return "";
  }

  return input.value?.trim();
}

/**
 * Displays the total specificity points to the user
 * @param {number} points The total specificity points
 * @returns {void}
 */
function setSpecificityPoints(points) {
  const resultsElement = document.querySelector(RESULTS_QUERY);
  if (!resultsElement) return;

  resultsElement.innerText = points;
}

/**
 * Handlers the main form submission
 * @param {Event} event The form event
 * @returns {void}
 */
function handleForm(event, inputType) {
  event.preventDefault();

  const inputValue = getInputValue(inputType);

  if (!inputValue.trim().length) {
    console.warn("Make sure your input is not empty");
    return false;
  }

  let rule = "";
  let totalPoints = "";

  switch (inputType) {
    case INPUT_TYPES.SINGLE:
      rule = inputValue;
      totalPoints = getSpecificityPoints(rule);
      break;
    case INPUT_TYPES.MULTI:
      const sortedRules = evaluateRules(rule);
      const [highestPriorityRule] = sortedRules;
      [rule, totalPoints] = highestPriorityRule;
      break;

    default:
      break;
  }

  if (rule && totalPoints) {
    console.info("SPECIFICITY RESULTS", {
      inputType,
      rule,
      totalPoints,
    });

    const plural = totalPoints === 1 ? "s" : "";

    setSpecificityPoints(
      `Rule: "${rule}" got (${totalPoints}) point${plural}.`
    );
  }

  // force-stops the event
  return false;
}
