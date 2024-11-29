/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */
/**
 * #6 :: Checks if a collection has any elements.
 *
 * @param {Array} collection - The collection to be checked.
 * @returns {boolean} True if the collection has elements, false otherwise.
 */
const checkCollectionHasElements = function (collection) {
    return collection.length > 0;
  };
  
  export default checkCollectionHasElements;
  