// Multiply left and right array sum
// Difficulty: BasicAccuracy: 62.84%Submissions: 55K+Points: 1Average Time: 20m
// You are given an array of integers, your task is to divide the array into two sub-arrays (left and right) containing half of the array elements. Find the sum of the subarrays and then return the multiply of both the subarrays.

// Note: If the length of the array is odd then the right half will contain one element more than the left half.

// Examples :

let arr = [1, 2, 3, 4];
// Output : 21
// Explanation: Sum up an array from index 0 to 1 = 3, Sum up an array from index 2 to 3 = 7. Their multiplication is 21.
// Input : arr = [1, 2] 
// Output :  2 
// Explanation: Their multiplication is 1*2 is equal to 2.

function multiply(arr){

    let sum1 = 0;
    let sum2 = 0;

    let n = arr.length;

    for(let i=0; i < Math.floor(n/2); i++){
        sum1 = sum1 + arr[i];
    }

    for(let i = Math.floor(n/2); i < n; i++){
        sum2= sum2 + arr[i];
    }


return console.log(sum1 * sum2);

}

multiply(arr);