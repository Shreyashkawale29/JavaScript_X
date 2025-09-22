// Reverse sub array
// Difficulty: BasicAccuracy: 31.78%Submissions: 30K+Points: 1
// Given an array arr, you need to reverse a subarray of that array. The range of this subarray is given by indices l and r (1-based indexing).

// Examples:

let arr = [1, 2, 3, 4, 5, 6, 7], l = 2, r = 4
// Output: [1, 4, 3, 2, 5, 6, 7]
// Explanation: After reversing the elements in range 2 to 4 (2, 3, 4), modified array is 1, 4, 3, 2, 5, 6, 7.
// Input: arr[] = [1, 6, 7, 4], l = 1, r = 4
// Output: [4, 7, 6, 1]
// Explanation: After reversing the elements in range 1 to 4 (1, 6, 7, 4), modified array is 4, 7, 6, 1.


function reverseSubArray(arr, l, r){

    l = l-1;
    r = r-1;

    while(l<r){

        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;

        l++;
        r--;

    }
    return console.log(arr);
    

}

reverseSubArray(arr, l, r);