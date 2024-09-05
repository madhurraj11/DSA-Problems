function tribonacci(n){
    if(n === 0){
        return 0;
    }
    else if(n === 1){
        return 1;
    }

    let firstTerm = 0;
    let secondTerm = 1;
    let thirdTerm = 1;

    for(let i = 1; i <= n; i++){
        let fourthTerm = firstTerm + secondTerm + thirdTerm;

        firstTerm = secondTerm;
        secondTerm = thirdTerm;
        thirdTerm = fourthTerm;
    }
    return firstTerm;
}

console.log(tribonacci(5));