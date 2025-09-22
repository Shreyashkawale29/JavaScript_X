let arr = [1,2,3,4,5,6,7,8,9];

let ans = arr.reduce(function(accumulator, val) {
        return accumulator + val;
    
}, 0);

console.log("Answer 1: "+ans);


// Use .reduce() to find the sum of this array:

let sum = [45,55,56,58,93];

let newsum = sum.reduce(function(accumulator, val){
        return accumulator + val;

}, 0);

console.log("Answer 2: "+newsum)
