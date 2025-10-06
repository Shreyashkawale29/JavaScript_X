// let number = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0;

// let open = number.map(function(val){
//     if(val % 2 === 0 )
//     return "Sucessful"
    
// })

// console.log(open)

// let arr = [1,2,3,4,5]

// arr.forEach(element => {
//     console.log("ForEach "+element*2);
    
    
// });

// let temp  = arr.map(function(val){
//     console.log("Map: "+val * val);
    
// });
// console.log(arr.length)


function checkprime(num){

    for(let i=2; i < num/2; i++){

        if(num%i === 0){
            return false;

        }


    }
    return true;

}

console.log(checkprime(7));
