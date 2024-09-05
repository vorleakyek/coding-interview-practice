
// Implement a function makeCounter that accepts an optional integer value and returns a function. 
// When the returned function is called initially, it returns the initial value if provided, otherwise 0. 
// The returned function can be called repeatedly to return 1 more than the return value of the previous invocation.


/**
 * @param {number} initialValue
 * @return {Function}
 */
export default function makeCounter(initialValue = 0) {
  
  let count = initialValue;
  
  return function() {
    return count++;
  }
}

const counter = makeCounter();
const first = counter(); // 0
const second = counter(); // 1
const third = counter();// 2



