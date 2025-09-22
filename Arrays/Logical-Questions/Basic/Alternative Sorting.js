// Alternative Sorting
// Difficulty: BasicAccuracy: 50.2%Submissions: 46K+Points: 1
// Given an array arr of distinct integers. Rearrange the array in such a way that the first element is the largest and the second element is the smallest, the third element is the second largest and the fourth element is the second smallest, and so on.

// Examples:

let arr = [7, 1, 2, 3, 4, 5, 6]
// Output: [7, 1, 6, 2, 5, 3, 4]
// Explanation: The first element is first maximum and second element is first minimum and so on.
// Input: arr[] = [1, 6, 9, 4, 3, 7, 8, 2]
// Output: [9, 1, 8, 2, 7, 3, 6, 4]
// Explanation: The first element is first maximum and second element is first minimum and so on.

function alternateSort(arr){

    arr.sort((a,b)=> a-b);  // Step 1: Sort in ascending order

    let start =0;   // Step 3: Start pointer
    let end = arr.length -1;    // Step 3: Start pointer
    let result = [];

    while(start <= end){    // Step 5: Loop until pointers meet

        if(start !== end){  // If not same index

            result[result.length] = arr[end]; // larger value
            result[result.length] = arr[start]; // smaller

        }else{
            result[result.length] = arr[start];     // Last middle value (odd-length case)
        }

        start++;
        end--;

    }
    return console.log(result);
    ;

}

alternateSort(arr);