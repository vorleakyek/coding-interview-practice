// URLify: Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the "true"
// length of the string.

// input: "Mr John Smith ", 13
// output: "Mr%20John%20Smith"

function urlify(str, length) {
  str = str.trim();
  const newStr = str.replace(/\s+/g, "%20");
  return newStr;
}

const a = urlify("Mr John Smith ", 13);
console.log(a);
