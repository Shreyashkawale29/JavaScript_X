// Rotating an Array
// Difficulty: BasicAccuracy: 44.48%Submissions: 122K+Points: 1Average Time: 20m
// Given an array arr[]. The task is to rotate the array by d elements where d ≤ arr.size.

// Examples:

// Input: arr[] = [-1, -2, -3, 4, 5, 6, 7], d = 2
// Output: [-3, 4, 5, 6, 7, -1, -2]
// Explanation:
// Rotate by 1: [-2, -3, 4, 5, 6, 7, -1]
// Rotate by 2: [-3, 4, 5, 6, 7, -1, -2]
let arr = [1, 2, 3, 4, 5];
let d = 2;
// Output: [2, 1, 3, 4]
// Explanation: After rotating the array three times, the first three elements shift one by one to the right.

function rotatingArray(arr, d) {
  let n = arr.length;

  function reverse(start, end) {
    while (start < end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }

  reverse(0, n - 1); // Reverse the whole Array

  reverse(0, n - d - 1); // Reverse the n-d element in Array

  reverse(n - d, n - 1); // Reverse the last d element

  return arr; // IMP - Without Returning Array Your output will be undefined.
}

console.log(rotatingArray(arr, d));
