let arr = [12,51,13,1,3,1,7];

let any = arr.some(function(val){
    return val>10;
})

console.log(any);

// Use .some() to check if any student has scored below 35;

let student = [35, 60, 70, 80, 20, 3, 5]

let lowscore = student.some(function(val){
    return val > 35;
})

console.log(`lowscore + ${lowscore}`)