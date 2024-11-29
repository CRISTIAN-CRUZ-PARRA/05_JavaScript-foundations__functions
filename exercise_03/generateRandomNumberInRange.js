/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * #3 :: Generates a rounded random number within a range given by a limit.
 *
 * @param {number} limit - The upper limit of the range.
 * @returns {number} Random number rounded between 0 and limit. Returns -1 if limit is negative.
 */
const generateRandomNumberInRange = function (limit) {
    if (limit < 0) return -1;
  
    return Math.floor(Math.random() * (limit + 1));
  };
  
  export default generateRandomNumberInRange;
