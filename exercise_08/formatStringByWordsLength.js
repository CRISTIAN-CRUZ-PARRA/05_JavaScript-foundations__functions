/**
 * #8 :: Export JS function "formatStringByWordsLength" to check number of words contained in given string
    - if total number of words is greater then 5, then return uppercase string
    - otherwise, return lower case string
 * input: string (sentence) 
 * output: string
 */

/**
 * CASE #1
 * input: "This is a long, long, long sentence."
 * output: "THIS IS A LONG, LONG, LONG SENTENCE."
 */

/**
 * CASE #2 * input: "This is short one."
 * output: "this is short one."
 */

/**
 * #8 :: Formats a text string according to the number of words.
 * If there are more than 5 words, return the string in uppercase.
 * If there are 5 or fewer words, return the string in lowercase.
 *
 * @param {string} sentence - The text string to format.
 * @returns {string} - The string formatted according to the number of words.
 */
const formatStringByWordsLength = function (sentence) {
    const words = sentence.split(/\s+/);
    if (words.length > 5) {
      return sentence.toUpperCase();
    } else {
      return sentence.toLowerCase();
    }
  };
  
  export default formatStringByWordsLength;
  