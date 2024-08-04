const str = "Shyam Baba Khatuwale";

// 1st approach to reverse the string using for of loop
const revArr = str.split(" ");

let revStr = '';
for(key of revArr){
    revStr = key + ' ' + revStr;
}
console.log(revStr);

// 2nd approach using reverse() function
const revArr_2 = str.split(" ").reverse().join(" ");

console.log(revArr_2);


// Find out the maximum character in the string

const para = "This is JavaScript code and I find out the maximum character";

let maxChar = 0;
let charMax = ""
for (let i = 0; i < para.length; i++) {
    let count = 0;
    for (let j = 0; j < para.length; j++) {
        if ((para[i].toLowerCase() === para[j].toLowerCase()) && para[i] !== " "){
            count++;
        }
    }
    if (count > maxChar) {
        maxChar = count;
        charMax = para[i]
    }
}

console.log(charMax, maxChar);

let arrStr = para.split("");
let maxChar1 = 0;
let charMax1= ""
arrStr.forEach((element) => {
    let counter =0;
    arrStr.forEach((element1) => {
        if((element.toLowerCase() === element1.toLowerCase()) && element !== " "){
            counter++;
        }
    });
    if(counter > maxChar1){
        maxChar1 = counter;
        charMax1 = element;
    }
}); 

console.log(charMax1, maxChar1);