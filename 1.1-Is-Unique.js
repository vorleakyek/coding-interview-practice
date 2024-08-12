// Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?
const word = "heay";

function isUnique(word) {
  const length = word.length;
  const chars = [];

  for (let i = 0; i < length; i++) {
    let index = word.charCodeAt(i);

    if (chars[index]) {
      //Aready found this char in string
      return false;
    }
    chars[index] = true;
  }
  return true;
}

console.log(isUnique(word));

//Time complexity: O(n) with "n" being the length of the string 
//Space complexity: O(1) 
