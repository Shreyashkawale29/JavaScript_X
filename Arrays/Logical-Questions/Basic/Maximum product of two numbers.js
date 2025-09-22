// Maximum product of two numbers
// Difficulty: BasicAccuracy: 48.92%Submissions: 49K+Points: 1
// Given an array arr of non-negative integers, return the maximum product of two numbers possible.

// Example:

let arr = [1, 4, 3, 6, 7, 0] 
// Output: 42
// Explanation: 6 and 7 have the maximum product.
//  let arr = [1, 100, 42, 4, 23]
// Output: 4200
// Explanation:  42 and 100 have the maximum product.

function maxProduct(arr){

    arr.sort((a,b) => a-b);
    let n = arr.length;
    let product;
    for(let i=0; i< arr.length; i++){

        product = arr[n-1]*arr[n-2];

    }
    return console.log(product);
    ;

}

maxProduct(arr);