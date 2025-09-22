// Display longest name
// Difficulty: BasicAccuracy: 66.29%Submissions: 79K+Points: 1Average Time: 15m
// Given an array arr[] containing strings of names. Your task is to return the longest string. If there are multiple names of the longest size, return the first occurring name.

// Examples :

let arr = ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
// Output: "GeeksforGeeks"
// Explanation: name "GeeksforGeeks" has maximum length among all names. 
// Input: arr[] = ["Apple", "Mango", "Orange", "Banana"]
// Output: "Orange"
// Explanation: names "Orange" and "Banana" both have maximum length among all names but Orange comes first so answer will be "Orange". 

function Largestword(arr){

    let Largest = arr[0];

    for(let i =0; i < arr.length; i++){

        if(arr[i].length > Largest.length){

            Largest = arr[i];


        }
    }
    return console.log(Largest);
}

Largestword(arr);