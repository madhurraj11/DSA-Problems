let num = 121;

let sum = 0;
let temp = num;
while(temp > 0) {
    rem  = temp % 10;
    sum = sum*10 + rem;
    temp = Math.floor(temp / 10);
}

if(sum === num){
    console.log(num + " is a palindrome.");
}

else{
    console.log(num + " is not a palindrome.");
}