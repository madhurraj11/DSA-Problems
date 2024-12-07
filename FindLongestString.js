//Find the longest string

let str = "abcdefabcdsvhggabc";
let max_length = 0;
let start = 0;
let newStr = "";
 for(let i = 0; i < str.length; i++){
    if(!newStr.includes(str.charAt(i))){
        newStr += str.charAt(i);
        if(newStr.length > max_length){
            max_length = newStr.length;
        }
    }
 }
console.log(newStr, max_length);
