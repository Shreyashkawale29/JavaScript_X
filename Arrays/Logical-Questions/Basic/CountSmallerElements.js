// Count of smaller elements
// Difficulty: BasicAccuracy: 54.54%Submissions: 116K+Points: 1Average Time: 20m
// Given an unsorted array arr. Find the count of elements less than or equal to the given element x.

// Examples:

// Input: x = 9, arr = [10, 1, 2, 8, 4, 5] 
// Output: 5
// Explanation: The 5 elements are 1, 2, 8, 4 and 5.
x = 2, arr = [1, 2, 2, 5, 7, 2, 9] 
// Output: 4 
// Explanation: The 4 elements are 1, 2, 2 and 2.

function countSmallerElement(x, arr){

    let count =0;
    for(let i =0; i < arr.length-1; i++){
        if(x >= arr[i]){
            count++;

        }
    }
    return console.log(count);

}

countSmallerElement(x, arr);