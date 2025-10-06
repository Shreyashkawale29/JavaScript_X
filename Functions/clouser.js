// what is closure ?

function outer(){
    let val = 25;
    
    function inner(){
        
        function inner2(){
            console.log("The value is:"+val);
        }
        inner2();

    }

    return inner;
}


let result = outer();
result();