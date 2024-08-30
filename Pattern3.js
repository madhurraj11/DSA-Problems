let str = "Welcome";
let row = "";
let len = str.length;
for(let i = 0; i<str.length; i++){
    for(let j= 0; j<str.length; j++){
        if(i == j || j == len - i - 1) {
            row += str[i];
        } else if (i == Math.floor(len / 2) && j == Math.floor(len / 2)) {
            row += "c";
        } else {
            row += " ";
        }
    }
    row += "\n";
}

console.log(row);