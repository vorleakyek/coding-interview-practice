//6. Zigzag Conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {

    if (numRows === 1) return s; 

    const arrayRows = [];

    for (let r=0; r<numRows; r++) {
        arrayRows.push('');
    }    

    for (let c = 0; c < s.length; ) {

       // Traverse down through rows
       for (let r=0; r<numRows && c < s.length; r++) {
            arrayRows[r] += s[c++];   
       } 
      
       // Traverse up through rows (skip the first and last row)
       for (let r=numRows-2; r > 0 && c < s.length; r--) {
        arrayRows[r] += s[c++];
       }

    }
    console.log(arrayRows)
    return arrayRows.join('');
};
