/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    if(strs[0] === '' || strs.length === 0) return ""
    
    if(strs.length === 1) return strs[0]
    
    let isCont = true;
    let subStrLength = 1;
    let maxSubStrLength = 0;
    
    
    for (let i=0; i<strs.length; i++) {
        if(strs[i].length > maxSubStrLength) {
            maxSubStrLength = strs[i].length
        }
    }
    
    
    while (isCont) {
        const subStr = strs[0].slice(0,subStrLength)
        
        if (subStrLength > maxSubStrLength) {
            isCont = false
        }
        
        for (let i=0; i<strs.length; i++) {
            // console.log('sub string',strs[i].slice(0,subStrLength) )
            if (strs[i].slice(0,subStrLength) !== subStr) {
                isCont = false
                return strs[0].slice(0,subStrLength-1);
            }     
        }
        
        subStrLength++; 
        
    }
  
    return strs[0].slice(0,subStrLength)
     
};
