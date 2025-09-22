let arr = [12,34,52,24,2,4]

let newmap = arr.map(function(val){
    if(val>10) return val;
})

console.log(newmap);

// map tab use karna hai jab aapko ek naya array babanna hai pichle array ke data ke basis par

// map dikhte hi maan mein ek blank array bana liya karo
//          when to use of array
// jab bhi aapko aisa koi case dikh jayye jaha par ek array se naya array banaga and wo naya array kuch values ko rekhega tab map lagega



// use .map() to square each number:

let cash = [2,3,4,5,7,8];

let save = cash.map(function(val){

    return (val * val);

})

console.log(save)


