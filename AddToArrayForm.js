function addToArrayForm(num,k){
    let len = num.length-1;
    let carry = 0;
    const res = []
    while(len >= 0 || k > 0){
        let numVal = 0;

        if(len >= 0){
            numVal = num[len];
        }

        let d = k%10;
        let sum = numVal + d + carry;
        let digit = sum%10;
        carry = Math.floor(sum/10);
        res.unshift(digit);

        len--;
        k = Math.floor(k/10);
    }

    if(carry > 0){
        res.unshift(carry);
    }

    return res;
}

console.log(addToArrayForm([9,7,4],151));