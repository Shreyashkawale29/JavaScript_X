//YOUTBE = https://www.youtube.com/watch?v=-HIzwQrU9f8

// Quick Left Rotation
// Difficulty: BasicAccuracy: 34.84%Submissions: 74K+Points: 1
// Given an array, arr[] of positive elements, and an integer k, the task is to left-rotate the array k indexes.
// Note: Rotate the array even if the k is greater than the size of the array. In these cases after every full array rotation, the array comes the same as the original array.

// Examples:

let arr = [1, 2, 3, 4, 5, 6, 7], k = 2
// Output: [3, 4, 5, 6, 7, 1, 2]
// Explanation: Rotating the above array by 2 will make the output array.
// let arr = [1, 2, 3, 4, 5, 6], k = 12;
// Output: [1, 2, 3, 4, 5, 6]
// Explanation: left Rotation of above array 12 times gives same array as output.

function leftRotation(k, arr) {
  k = k % arr.length;

  while (k > 0) {
    let temp = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr[arr.length-1] = temp;
    k--;
  }

  return console.log(arr);
  
}

leftRotation(k, arr);
