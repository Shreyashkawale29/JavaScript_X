let arr = [12, 63, 26, 1, 10]

function minmaxArray(arr){

    let min = arr[0];
    let max = arr[0];

    for(let i = 0; i< arr.length; i++){

        if(arr[i] > max){
            max = arr[i]

        }
        if(arr[i] < min){
            min = arr[i]
        }



    }
    return console.log([min, max]);

}

minmaxArray(arr)