let arr = [1,2,3,4,5,6];

function rotatebyone(arr){

    let last = arr[arr.length-1]; //  To Store last element in the array

    for(let i = arr.length; i > 0; i--){

        arr[i] = arr[i-1]

    }
    arr[0] = last;
    return console.log(arr);
    ;

}

rotatebyone(arr);
