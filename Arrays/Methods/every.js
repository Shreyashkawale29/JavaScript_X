let arr = [10,20,30,40,50]

let callme = arr.every(function(val){
    return val > 20;
})

console.log(callme)

// Use every() to check if all numbers are even;

let ev = [2,4,8,10,46,50]

let even = ev.every(function(val){
    return val % 2 === 0;

})

console.log(`All numbers Are Even? : ${even}`)

