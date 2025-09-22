let arr  = [1, 2, 3, 4, 5]

function printArray(arr){

    let result =""
    for(let i=0; i < arr.length; i++){

        result = result + arr[i] + " ";

    }
    return console.log(result);

}

printArray(arr);

