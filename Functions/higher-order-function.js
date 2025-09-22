// what is higher order function

function abcd(){
    return function(){

    }
}


// 2 Example 

function xyz(val){
    val();
}

xyz(function(){
    console.log("Oyee Guruuuuu!!!")
});


function counter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let c = counter();
console.log(c());
console.log(c());
console.log(c());



