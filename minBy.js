/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */
export default function minBy(array, iteratee) {
  let result, computed;

  for (const value of array) {
    const current = iteratee(value);
    if (current != null && (computed === undefined || current < computed)) {
      computed = current;
      result = value;
    }
  }
  //return the original element in the array that corresponds to the minimum computed value since it can be a number or an object 
  return result;
}
