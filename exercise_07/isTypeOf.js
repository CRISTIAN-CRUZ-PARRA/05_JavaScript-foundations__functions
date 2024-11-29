/**
 * #7 :: Export JS function "isTypeOf" to check if type of value matches type received as argument
 * input: any (value)
 * input: 'string' | 'number' | 'boolean' | 'array' (type)
 * output: boolean
 */

/**
 * hint 👉 array should be treated in a different way. Use Array.isArray() to check it
 * docu 👉 https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
 */


/**
 * #7 :: Checks whether the type of the value matches the type received as an argument.
 * If the type is 'array', use Array.isArray() to check specially.
 * 
 * @param {any} value - The value whose type is to be checked.
 * @param {'string' | 'number' | 'boolean' | 'array'} type - The type to be compared to.
 * @returns {boolean} - Returns true if the types match, false otherwise.
 */
const isTypeOf = function (value, type) {
    if (type === 'array') {
      return Array.isArray(value);
    }
    return typeof value === type;
  };
  
  export default isTypeOf;
  