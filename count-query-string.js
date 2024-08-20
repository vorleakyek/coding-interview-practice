//There is a collection of input strings and a collection of query strings. 
//For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.
//https://www.hackerrank.com/challenges/sparse-arrays/problem?isFullScreen=true

function matchingStrings(stringList, queries) {
    // Write your code here
    
    const strObj = {};
    
    for (let i=0; i<stringList.length; i++) {
        
        if(strObj[stringList[i]]) {
            strObj[stringList[i]]++; 
        } else {
            strObj[stringList[i]] = 1;
        }    
    }
    const result = [];
    
    for (let i=0; i<queries.length; i++) {
        if(strObj[queries[i]]) {
            result.push(strObj[queries[i]])
        } else {
            result.push(0)
        }
    }
    
    return result;
}
