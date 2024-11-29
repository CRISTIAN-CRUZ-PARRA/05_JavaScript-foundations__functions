/**
 * #4 :: Export JS function "isGreaterThan" to check whether one number is greater than a given number
 * input: number (value)
 * input: number (threshold)
 * output: boolean
 */
/**
 * #4 :: Checks if a number is greater than a given value.
 *
 * @param {number} value - The number to check.
 * @param {number} threshold - The limit number to compare to.
 * @returns {boolean} True if `value` is greater than `threshold`, otherwise false.
 */
const isGreaterThan = function (value, threshold) {
    return value > threshold;
  };
  
  export default isGreaterThan;
  