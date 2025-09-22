let arr = ["Shikamaru", "Sakuke", "Naruto", "Shinchan", "Java", "ShreyashKawale"]

let Largest = arr[0];

function largestword(arr){

    for(let i=0; i < arr.length; i++){

        if(arr[i].length > Largest.length){

            Largest = arr[i];
        }
    }

    return console.log(Largest);
    

}

largestword(arr)