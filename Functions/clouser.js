// what is closure ?

function abcd(){
    let val = 0;
    return function(){
        console.log(`The value is:`+val);
    };
}

abcd();