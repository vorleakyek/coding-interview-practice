const strA = "listen";
const strB = "silent";

function isPermutation(strA, strB) {
  const lenStrA = strA.length;
  const lenStrB = strB.length;

  if (lenStrA !== lenStrB) {
    return false;
  }

  const sort_strA = strA.split("").sort();
  const sort_strB = strB.split("").sort();

  for (let i = 0; i < lenStrA; i++) {
    if (sort_strA[i] != sort_strB[i]) {
      return false;
    }
  }

  return true;
}

console.log(isPermutation(strA, strB));
