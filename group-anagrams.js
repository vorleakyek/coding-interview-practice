
// Function to group anagrams in an array of strings.
// Each group contains strings that are anagrams of each other.

// My solution 
function groupAnagrams(strs) {
    
    if (strs.length === 1) return [strs]; 
    const result = [];

    const map = {}

    for (let i=0; i<strs.length; i++){
        const strArr = strs[i].split('');
        const sortedStr = strArr.sort().join(''); 
        console.log(sortedStr)

        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]]; 
        } else {
            map[sortedStr].push(strs[i])
        }

    }
    
    for (let key in map) {
        result.push(map[key])
    }

    return result;
    
};
// **************************************************************** //  

// A more robust solution 
function groupAnagrams(strs: string[]): string[][] {
    // Define a map to hold the sorted string as key and an array of its anagrams as value.
    const anagramMap: Map<string, string[]> = new Map();
  
    // Iterate through each string in the input array.
    for (const str of strs) {
        // Sort the characters of the string to form the key.
        const key = str.split('').sort().join('');

        // If the key is not present in the map, initialize it with an empty array.
        if (!anagramMap.has(key)) {
            anagramMap.set(key, []);
        }

        // Add the original string to the corresponding key's list of anagrams.
        anagramMap.get(key)!.push(str);
    }

    // Convert the values of the map to an array and return.
    return Array.from(anagramMap.values());
}
