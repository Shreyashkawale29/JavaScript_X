let arr = [1,2,3,4,5,6,7,8,9]

let arr2 = [...arr];
console.log(arr2)

arr2.pop();
let sorted = arr2.sort(function(a, b){
    return a-b
})

console.log(sorted)

console.log(arr)

// Merge two array by using Spread oprator;

let a = [1,3,5,7]
let b = [2,4,6,8]

let c = [...a,...b]

// c.sort();
console.log(`Sorted Array : ${c}`)

// Add "India" to the start of this array using spread:

let country = ["Uk", "German"]

country = ["India",...country]

console.log(country)

