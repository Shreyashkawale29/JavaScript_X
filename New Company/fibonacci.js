function fibonacci(num) {

    let n1 = 0;
    let n2 = 1;
    let n3;

    console.log(n1+" ");
    
    
    for(let i =1; i <= num; i++){

        n3 = n1 + n2;
        n1=n2;
        n2=n3; 
        console.log(n1+"");

    }
}

fibonacci(20);
