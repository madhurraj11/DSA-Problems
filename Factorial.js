n = 5;

function factorial(n){
    let res = 1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }
    return res;
}

console.log(factorial(n));

function factorial2(n){
    if(n == 0 || n == 1){
        return 1;
    }
    return n * factorial2(n-1);
}

console.log(factorial2(n));
