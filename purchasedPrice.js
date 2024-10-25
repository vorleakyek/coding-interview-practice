'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'priceCheck' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY products
 *  2. FLOAT_ARRAY productPrices
 *  3. STRING_ARRAY productSold
 *  4. FLOAT_ARRAY soldPrice
 */

function priceCheck(products, productPrices, productSold, soldPrice) {
    // Write your code here
    
    let errors = 0; 
    
    for (let i=0; i<productSold.length; i++) {
        const productIndex = products.findIndex((name) => name == productSold[i]); 
        const actualPrice = productPrices[productIndex]; 
        const purchasedPrice = soldPrice[i]; 
        
        if (purchasedPrice !== actualPrice) {
            errors++; 
        }    
        
    }
    
    return errors;

}
