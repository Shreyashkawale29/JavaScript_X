// function Factorial(num){

//     let res = 1;

//     for(let i =1; i <= num; i++){

//         res = res * i;

//     }
//     return res;


// }
// console.log(Factorial(5));

function Factorial(num){

    if(num === 0 ||  num ===1){
        return 1;
    }

    return num  * Factorial(num-1);

}

console.log(Factorial(5));

