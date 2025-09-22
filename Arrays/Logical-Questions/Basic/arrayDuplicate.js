// Array Duplicates
// Given an array arr[] of size n, containing elements from the range 1 to n, and each element appears at most twice, return an array of all the integers that appears twice.

// Note: You can return the elements in any order but the driver code will print them in sorted order.

// Examples:

// Input: arr[] = [2, 3, 1, 2, 3]
// Output: [2, 3] 
// Explanation: 2 and 3 occur more than once in the given array.
// Input: arr[] = [3, 1, 2] 
// Output: []
// Explanation: There is no repeating element in the array, so the output is empty.



let array = [2,4,6,8,2,5,4,3,3]

function arrayDuplicate(arr){

    let result = arr.filter((arr, index, self)=>{

        return self.indexOf(arr) !== index;
        

    })
    return console.log(result);
}

arrayDuplicate(array);