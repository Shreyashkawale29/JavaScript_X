let arr = [
    {id:1, key:1},
    {id:2, key:10},
    {id:3, key:1},
]

let sh = arr.find(function(val){
    return val.key === 1;

});

console.log(sh)


// Use .find() to get the first numbe less than 10;

let u = [12, 61, 5, 7,  14]

let k = u.find(function(val){
    return val < 10;
})

console.log(`The first number less than 10 : ${k}`)
