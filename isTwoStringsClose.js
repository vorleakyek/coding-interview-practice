//1657. Determine if Two Strings Are Close 


/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

    if(word1. length != word2.length) return false;
    const freq = {}
    const freq2 = {}

    for(let i=0; i<word1.length; i++) {
        if (freq[word1[i]]) {
           freq[word1[i]] = freq[word1[i]] + 1
        } else {
            freq[word1[i]] = 1;
        } 
    }

    for (let j=0; j<word2.length; j++) {
        if(freq2[word2[j]]) {
            freq2[word2[j]] = freq2[word2[j]] + 1
        } else {
            freq2[word2[j]] = 1
        }
    }

    const arr1 = [];
    const arr2 = [];

    for (let letter in freq) {
        arr1.push(freq[letter])
    }

    for (let letter in freq2) {
        arr2.push(freq2[letter])
    }

    const arr1Sort = arr1.sort();
    const arr2Sort = arr2.sort();

    for (let i=0; i<arr1Sort.length; i++) {
        if(arr1Sort[i] =! arr2Sort[i]) {
            return false
        }

        return true;
    }

    console.log(arr1Sort, arr2Sort)
};
