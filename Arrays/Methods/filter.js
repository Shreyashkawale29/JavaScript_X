let arr = [1,2,3,4,5,6,7,8,9,10];

let newfilter = arr.filter(function(val){
    if(val>4) return true;
})

console.log(newfilter)


// use .filter() to keep numbers greater than 10;

let mynum = [34, 67, 12, 64, 7, 3, 5,3]

let origin = mynum.filter(function(val){

    return val > 10;

})

console.log(origin)