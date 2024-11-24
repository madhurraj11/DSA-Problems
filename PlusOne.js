var plusOne = function(digits) {
    let n = digits.length;

    if(digits[n-1]!==9){
        digits[n-1] = digits[n-1]+1;
        return digits;
    }

    digits[n-1] = 0;

    for(let i=n-2;i>=0;i--){
        if(digits[i]!==9){
            digits[i]=digits[i]+1;
            return digits;
        }
        digits[i] = 0;
    }

    // const ans = new Array(n+1).fill(0);
    // ans[0] = 1;
    digits.unshift(1);
    return digits;
};

console.log(plusOne([4,3,2,1,3,9,9]));
