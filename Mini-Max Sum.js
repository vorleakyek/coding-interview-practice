function miniMaxSum(arr) {
    // Write your code here
    const sortedArr = arr.sort(); 
    
    let min = 0; 
    
    for (let i =0; i < arr.length - 1; i++) {
        min += sortedArr[i];
    }
    
    const max = min - sortedArr[0] + sortedArr[sortedArr.length - 1];
    
    console.log(`${min} ${max}`)

}
