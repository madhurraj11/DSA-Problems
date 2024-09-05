function fib(n){
    if(n === 0){
       return 0; 
    }
    else if(n === 1){
        return 1;
    }
    let firstTerm = 0;
    let secondTerm = 1;

    for(let i = 1; i <= n; i++){
        let thirdTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = thirdTerm;
    }
    return firstTerm;
}

console.log(fib(10));