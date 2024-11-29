/**
 * #10 :: Export JS function "transformCollectionToString" to transform collection into string
    - if array has elements, then return array as string, joined by '|' (pipe character)
    - otherwise, return an empty string
 * input: array (collection) 
 * output: string
 */

/**
 * CASE #1
 * input: ['apple', 'grapes', 'strawberries']
 * output: "apple | grapes | strawberries"
 */

/**
 * CASE #2
 * input: []
 * output: ""
 */


/**
 * #10 :: Converts a collection (array) to a string, with the elements joined by '|'.
 * If the array is empty, returns an empty string.
 * 
 * @param {Array} collection - The array to transform.
 * @returns {string} - The string with the elements joined by '|', or an empty string if the collection is empty.
 */
const transformCollectionToString = function (collection) {
    if (collection.length > 0) {
      return collection.join(' | ');
    }
    return '';
  };
  
  export default transformCollectionToString;
  