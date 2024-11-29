/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * #2 :: Gets the total number of words contained in a text string.
 *
 * @param {string} sentence - The phrase to analyze.
 * @returns {number} The total number of words in the sentence.
 */
const getTotalWordsFromString = function (sentence) {
    if (!sentence.trim()) return 0;
  
    const words = sentence.trim().split(/\s+/);
    return words.length;
  };
  
  export default getTotalWordsFromString;
  