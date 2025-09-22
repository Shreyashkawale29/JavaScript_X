// Swap kth elements
// Difficulty: BasicAccuracy: 52.76%Submissions: 78K+Points: 1Average Time: 15m
// Given an array arr[], swap the kth element from the beginning with the kth element from the end.

// Note: 1-based indexing is followed.

// Examples :

arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
// Output: [1, 2, 6, 4, 5, 3, 7, 8]
// Explanation: 3rd element from beginning is 3 and 3rd element from end is 6, so we replace 3 & 6.
// Input: arr[] = [5, 3, 6, 1, 2], k = 2
// Output: [5, 1, 6, 3, 2]
// Explanation: 2nd element from beginning is 3 and from end is 1.

function swapkthelement(k, arr){

    let fromfirst = k -1;
    let fromlast = arr.length - k;


    let temp = arr[fromfirst];
    arr[fromfirst] = arr[fromlast];
    arr[fromlast] = temp;

    return console.log(arr);
    

}

swapkthelement(k, arr);