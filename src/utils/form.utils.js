/**
 * Gets the value of the input
 * @param {INPUT_TYPE} inputType Either single or multi
 * @returns {string} The input value
 */
function getInputValue(inputType) {
  const input = document.querySelector(INPUT_QUERIES[inputType]);
  return input?.value ?? "";
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
  const totalPoints = getSpecificityPoints(inputValue);

  console.log("SPECIFICITY RESULTS", {
    inputType,
    inputValue,
    totalPoints,
  });

  setSpecificityPoints(totalPoints);
}
