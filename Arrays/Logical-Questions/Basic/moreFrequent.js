// Who has the majority?
// Difficulty: BasicAccuracy: 44.36%Submissions: 109K+Points: 1
// Given an array arr[] and two elements x and y, return the element that occurs more frequently. If both elements have the same frequency, return the smaller one.

// Examples:

arr = [1, 1, 2, 2, 3, 3, 4, 4, 4, 4, 5], x = 4, y = 5
// Output: 4
// Explanation: frequency of 4 is 4.frequency of 5 is 1.Since 4>1 so return 4
// arr = [1, 2, 3, 4, 5, 6, 7, 8], x = 1, y = 7
// Output: 1
// Explanation: frequency of 1 is 1.frequency of 7 is 1.Since 1 < 7, return 1.

moreFrequent(arr, x, y);

function moreFrequent(arr, x, y) {
        let countx = 0;
        let county = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === x) {
                countx++;
            }
            if (arr[i] === y) {
                county++;
            }
        }

        if (countx === county) {
            return console.log(x < y ? x : y);
              // If frequencies are equal, return smaller value
        } else {
            return console.log(countx > county ? x : y);
             // Return the one with higher frequency
    }
}
