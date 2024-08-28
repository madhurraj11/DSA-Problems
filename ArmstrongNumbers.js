function ArmstrongNumber(num){
    let temp = num;
    let digits = calculatelength(temp);
    let sum = 0;

    function calculatelength(number){
        let n=0;
        while(number > 0){
            n++;
            number = Math.floor(number/10);
        }
        return n;
    }

    while(temp){
        rem = temp % 10;
        temp = Math.floor(temp / 10);
        sum = sum + Math.pow(rem, digits);
    }
    if(sum === num){
        return `${num} is a armstrong number.`; //153, 1634
    }
    else{
        return `${num} is not a armstrong number.`;
    }
}

const result = ArmstrongNumber(1634);
console.log(result);