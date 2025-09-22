let arr = [1,2,3,4,5,6,7,8,9,10];
let sum =0;

function sumofeven(arr){

    for(let i=0; i < arr.length; i++){

        if(arr[i] % 2 ==0){
             sum = sum + arr[i];
        }
    }
    return console.log(sum);
}

sumofeven(arr);