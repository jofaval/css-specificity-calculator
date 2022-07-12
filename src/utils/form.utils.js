// Constants
import { INPUT_QUERY, RESULTS_QUERY } from "./constants/form.constants.js";
// Utilities
import { getSpecificityPoints } from "./specificity.utils.js";

/**
 * Gets the value of the input
 * @returns {string} The input value
 */
const getInputValue = () => {
  const input = document.querySelector(INPUT_QUERY);
  return input?.nodeValue ?? "";
};

/**
 * Displays the total specificity points to the user
 * @param {number} points The total specificity points
 * @returns {void}
 */
const setSpecificityPoints = (points) => {
  const resultsElement = document.querySelector(RESULTS_QUERY);
  if (!resultsElement) return;

  resultsElement.innerText = points;
};

/**
 * Handlers the main form submission
 * @param {Event} event The form event
 * @returns {void}
 */
const handleForm = (event) => {
  event.preventDefault();
  const inputValue = getInputValue();
  const totalPoints = getSpecificityPoints(inputValue);
  setSpecificityPoints(totalPoints);
};

export default { handleForm };
