/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * #1 :: Find the difference between a number and a threshold
 * Calculates how much a value exceeds the threshold or how much it is short of reaching it.
 *
 * @param {number} value - The value to be evaluated.
 * @param {number} threshold - The threshold.
 * @returns {number} The difference between the value and the threshold.
 */
const getDistanceFromThreshold = function (value, threshold) {
    return value - threshold;
  };
  
  export default getDistanceFromThreshold;
  