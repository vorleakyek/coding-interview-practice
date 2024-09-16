// 290. Word Pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = {};

    const sArr = s.split(' ');

    const isValueExist = function(value) {
        for (let v in map) {
            if (map[v] === value){
                return true;
            } 
        }
        return false;
    }

    for (let i=0; i<pattern.length; i++){
      if (!map[pattern[i]] && !isValueExist(sArr[i])) {
        map[pattern[i]] = sArr[i]
      }  
    }

    let pStr = '';
    
    for (let i=0; i<pattern.length; i++){
        if (i === pattern.length -1) {
            pStr += map[pattern[i]];
        } else {
            pStr += map[pattern[i]] + ' ';
        }
    }

    if (s === pStr) {
        return true;
    } 

    return false;     

};
