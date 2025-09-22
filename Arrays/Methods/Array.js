let arr = [1, 2, 3, 4, 5, 6, 7, 8];
arr[4] = 24;

arr.push(7000);  // push method last me value ko jod deta hai
arr.pop()   // pop method Last wali value hata deta hai
arr.shift()  // shift method start wali value hata deta hai
arr.unshift(0)   // unshift method start me value ko jodta hai 
arr.splice(2,1)     // splice method value hatane ke liye use krte hai  splice.(Kaha se Value hatani hai, kitni value hatani hai)
let newarr = arr.slice(0,3)      // slice method(kaha se hatana hai, kaha tak hatana hai) per ye new copy banata hai, to hame new variable me usko store krna padega
arr.reverse();      // reverse method array ko reverse kr deta hai

console.log(arr)
console.log(newarr)

let play = [82,25,45,3,6,68,4,2,1]

let rs =play.sort(function(a, b){
    return a-b;
})

// sort method ek function input leti hai, aur a-b kiya to assending order hota hai, aur b-a kiya to descending order hota hai. 

console.log(rs);


