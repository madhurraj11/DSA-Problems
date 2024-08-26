let str = "bananab";

function palindromeCheck(str) {
    let len = str.length - 1;
for(let i = 0; i < len/2; i++){
    let x = str[i];
    let y = str[len - i];
    if(x != y){
        return "The string is not a palindrome";
    }
}
return "The string is a palindrome";
}

const res = palindromeCheck(str);
console.log(res);